import {Component, Input, OnInit} from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-education-entry',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() group?: AbstractControl
  @Input() education?: any

  formGroup!: FormGroup

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.group) {
      this.formGroup = this.group as FormGroup
    } else {
      this.formGroup = this._fb.group({
        name: [this.education?.name || '', Validators.required],
        institution: this._fb.group({
          name: [this.education?.institution?.name || '', Validators.required],
          location: this._fb.group({
            city: [this.education?.institution?.location?.city || ''],
            country: [this.education?.institution?.location?.country || '']
          })
        }),
        beginAt: [this.education?.beginAt || ''],
        endAt: [this.education?.endAt || ''],
        description: [this.education?.description || '']
      })
    }
  }
}
