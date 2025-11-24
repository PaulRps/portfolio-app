import {Component, Input, OnInit} from '@angular/core'
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {
  @Input() group?: AbstractControl

  formGroup!: FormGroup

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.group) {
      this.formGroup = this.group as FormGroup
    } else {
      this.formGroup = this._fb.group({
        interests: this._fb.array([this._fb.control('', Validators.required)])
      })
    }
  }

  get interests(): FormArray {
    return this.formGroup.get('interests') as FormArray
  }

  addInterest() {
    this.interests.push(this._fb.control('', Validators.required))
  }

  removeInterest(i: number) {
    this.interests.removeAt(i)
  }
}
