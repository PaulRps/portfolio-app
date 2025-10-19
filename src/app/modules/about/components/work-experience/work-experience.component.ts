import {Component, Input, OnInit} from '@angular/core'
import {JobExperience} from '../../../../shared/models/dto/job-experience.dto'
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() workExperience?: JobExperience
  // optional parent-provided group (may be an AbstractControl returned by FormArray.at(i))
  @Input() group?: AbstractControl

  formGroup!: FormGroup

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // If a parent FormGroup was provided, use it. Otherwise build an internal single-experience form.
    if (this.group) {
      // experiences.at(i) is typed as AbstractControl; cast to FormGroup for internal use
      this.formGroup = this.group as FormGroup
    } else {
      this.formGroup = this._formBuilder.group({
        role: [this.workExperience?.role || '', Validators.required],
        company: this._formBuilder.group({
          name: [this.workExperience?.company?.name || '', Validators.required],
          location: this._formBuilder.group({
            city: [this.workExperience?.company?.location?.city || ''],
            country: [this.workExperience?.company?.location?.country || '']
          })
        }),
        beginAt: [this.workExperience?.beginAt || ''],
        endAt: [this.workExperience?.endAt || ''],
        squad: [this.workExperience?.squad || '', Validators.required],
        description: this._formBuilder.array(
          (this.workExperience?.description || []).length
            ? this.workExperience!.description.map((d) =>
                this._formBuilder.control(d, Validators.required)
              )
            : [this._formBuilder.control('', Validators.required)]
        )
      })
    }
  }

  get description(): FormArray {
    return this.formGroup.get('description') as FormArray
  }

  /**
   * Build a JobExperience-shaped preview from the current form values.
   * Falls back to the @Input() workExperience if form is not available.
   */
  get preview(): JobExperience | undefined {
    if (!this.formGroup) {
      return this.workExperience
    }

    const raw = this.formGroup.value
    if (!raw) return this.workExperience

    const descriptions: string[] = (raw.description || []).map(
      (d: any) => d || ''
    )

    return {
      company: {
        name: raw.company?.name || '',
        location: {
          city: raw.company?.location?.city || '',
          country: raw.company?.location?.country || ''
        }
      },
      role: raw.role || '',
      beginAt: raw.beginAt || '',
      endAt: raw.endAt || '',
      description: descriptions,
      squad: raw.squad || ''
    }
  }

  formatPreviewTitle(): string {
    const company = this.preview?.company?.name || 'Preview'
    const location = this.preview?.company?.location
      ? `${this.preview.company.location.city || ''} ${
          this.preview.company.location.country
            ? `, ${this.preview.company.location.country}`
            : ''
        }`
      : ''
    return `${company} ${location ? `- ${location}` : ''}`
  }

  addDescription() {
    this.description.push(this._formBuilder.control('', Validators.required))
  }

  removeDescription(index: number) {
    this.description.removeAt(index)
  }

  private getPeriod(): string {
    return `${this.workExperience?.beginAt || ''} - ${
      this.workExperience?.endAt || ''
    }`
  }
}
