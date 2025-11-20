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
    // Always initialize forms with defaults first so getters/templates don't access undefined groups
    this.initForm()

    this.aboutService.getResumeData().subscribe((data) => {
      if (data) this.initializeFromData(data)
    })
  }
  private initForm() {
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
    this.aboutService.buildResume(<any>payload).subscribe((blob: Blob) => {
      const fileURL = window.URL.createObjectURL(blob)
      const opened = window.open(fileURL, '_blank')
    })
  }

  private initializeFromData(data: any) {
    // Experiences
    if (Array.isArray(data.experiences)) {
      // clear current
      while (this.experiences.length) {
        this.experiences.removeAt(0)
      }
      data.experiences.forEach((exp: any) => {
        const g = this.createExperienceGroup(exp)
        this.experiences.push(g)
      })
    }

    // Educations (accept both 'educations' and legacy 'education')
    const educationList = Array.isArray(data.educations)
      ? data.educations
      : data.education
    if (Array.isArray(educationList)) {
      while (this.educations.length) {
        this.educations.removeAt(0)
      }
      educationList.forEach((edu: any) => {
        const g = this.createEducationGroup(edu)
        this.educations.push(g)
      })
    }

    // Technologies
    if (Array.isArray(data.technologies)) {
      while (this.technologies.length) {
        this.technologies.removeAt(0)
      }
      data.technologies.forEach((t: any) =>
        this.technologies.push(
          this._formBuilder.control(t || '', Validators.required)
        )
      )
    }

    // Projects
    if (Array.isArray(data.projects)) {
      while (this.projects.length) {
        this.projects.removeAt(0)
      }
      data.projects.forEach((p: any) =>
        this.projects.push(
          this._formBuilder.control(p || '', Validators.required)
        )
      )
    }

    // Interests
    if (Array.isArray(data.interests)) {
      while (this.interests.length) {
        this.interests.removeAt(0)
      }
      data.interests.forEach((it: any) =>
        this.interests.push(
          this._formBuilder.control(it || '', Validators.required)
        )
      )
    }
  }

  private createExperienceGroup(exp?: any): FormGroup {
    const descArray =
      exp && Array.isArray(exp.description) && exp.description.length
        ? exp.description.map((d: any) =>
            this._formBuilder.control(d || '', Validators.required)
          )
        : [this._formBuilder.control('', Validators.required)]

    return this._formBuilder.group({
      company: this._formBuilder.group({
        name: [exp?.company?.name || '', Validators.required],
        location: this._formBuilder.group({
          city: [exp?.company?.location?.city || ''],
          country: [exp?.company?.location?.country || '']
        })
      }),
      role: [exp?.role || '', Validators.required],
      beginAt: [exp?.beginAt || ''],
      endAt: [exp?.endAt || ''],
      description: this._formBuilder.array(descArray),
      squad: [exp?.squad || '', Validators.required]
    })
  }

  private createEducationGroup(edu?: any): FormGroup {
    return this._formBuilder.group({
      name: [edu?.name || '', Validators.required],
      institution: this._formBuilder.group({
        name: [edu?.institution?.name || '', Validators.required],
        location: this._formBuilder.group({
          city: [edu?.institution?.location?.city || ''],
          country: [edu?.institution?.location?.country || '']
        })
      }),
      beginAt: [edu?.beginAt || ''],
      endAt: [edu?.endAt || ''],
      description: [edu?.description || '']
    })
  }
}
