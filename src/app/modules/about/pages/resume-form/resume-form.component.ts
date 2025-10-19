import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {FormArray} from '@angular/forms'
import {AboutService} from '../../about.service'

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {
  // Form groups for each step
  experienceFormGroup!: FormGroup
  technologiesFormGroup!: FormGroup
  educationFormGroup!: FormGroup
  projectsFormGroup!: FormGroup
  interestFormGroup!: FormGroup

  // arrays for simple string lists
  // (we keep the *FormGroup suffix for consistency with the rest)

  constructor(
    private _formBuilder: FormBuilder,
    private aboutService: AboutService
  ) {}

  ngOnInit(): void {
    // Experience step: parent manages a FormArray of single-entry form groups
    this.experienceFormGroup = this._formBuilder.group({
      experiences: this._formBuilder.array([this.buildExperienceGroup()])
    })

    this.technologiesFormGroup = this._formBuilder.group({
      technologies: this._formBuilder.array([
        this._formBuilder.control('', Validators.required)
      ])
    })

    // Education step: use a FormArray of Education entries
    this.educationFormGroup = this._formBuilder.group({
      educations: this._formBuilder.array([this.buildEducationGroup()])
    })

    this.projectsFormGroup = this._formBuilder.group({
      projects: this._formBuilder.array([
        this._formBuilder.control('', Validators.required)
      ])
    })

    this.interestFormGroup = this._formBuilder.group({
      interests: this._formBuilder.array([
        this._formBuilder.control('', Validators.required)
      ])
    })
  }

  get experiences(): FormArray {
    return this.experienceFormGroup.get('experiences') as FormArray
  }

  get educations(): FormArray {
    return this.educationFormGroup.get('educations') as FormArray
  }

  get technologies(): FormArray {
    return this.technologiesFormGroup.get('technologies') as FormArray
  }

  addTechnology() {
    this.technologies.push(this._formBuilder.control('', Validators.required))
  }

  removeTechnology(index: number) {
    this.technologies.removeAt(index)
  }

  buildEducationGroup(): FormGroup {
    return this._formBuilder.group({
      name: ['', Validators.required],
      institution: this._formBuilder.group({
        name: ['', Validators.required],
        location: this._formBuilder.group({
          city: [''],
          country: ['']
        })
      }),
      beginAt: [''],
      endAt: [''],
      description: ['']
    })
  }

  addEducation() {
    this.educations.push(this.buildEducationGroup())
  }

  removeEducation(index: number) {
    this.educations.removeAt(index)
  }

  buildExperienceGroup(): FormGroup {
    return this._formBuilder.group({
      company: this._formBuilder.group({
        name: ['', Validators.required],
        location: this._formBuilder.group({
          city: [''],
          country: ['']
        })
      }),
      role: ['', Validators.required],
      beginAt: [''],
      endAt: [''],
      description: this._formBuilder.array([
        this._formBuilder.control('', Validators.required)
      ]),
      squad: ['', Validators.required]
    })
  }

  addExperience() {
    this.experiences.push(this.buildExperienceGroup())
  }

  removeExperience(index: number) {
    this.experiences.removeAt(index)
  }

  get projects(): FormArray {
    return this.projectsFormGroup.get('projects') as FormArray
  }

  addProject() {
    this.projects.push(this._formBuilder.control('', Validators.required))
  }

  removeProject(index: number) {
    this.projects.removeAt(index)
  }

  get interests(): FormArray {
    return this.interestFormGroup.get('interests') as FormArray
  }

  addInterest() {
    this.interests.push(this._formBuilder.control('', Validators.required))
  }

  removeInterest(index: number) {
    this.interests.removeAt(index)
  }

  onSubmit(): void {
    const payload = {
      experiences: this.experiences.controls.map((c) => c.value),
      education: this.educations.controls.map((c) => c.value),
      technologies: this.technologies.controls.map((c) => c.value),
      projects: this.projects.controls.map((c) => c.value),
      interests: this.interests.controls.map((c) => c.value)
    }
    // For now just log the collected data. Replace with actual submit logic.
    console.log('Resume form submitted', payload)
    this.aboutService.buildResume(<any>payload).subscribe((blob: Blob) => {
      // const url = window.URL.createObjectURL(blob)
      // const a = document.createElement('a')
      // a.href = url
      // a.download = 'custom-resume.pdf'
      // a.click()
      // window.URL.revokeObjectURL(url)

      const fileURL = window.URL.createObjectURL(blob)
      const opened = window.open(fileURL, '_blank')
      // if (!opened) this.toastMessage('unblock popup to get the resume')
    })
  }
}
