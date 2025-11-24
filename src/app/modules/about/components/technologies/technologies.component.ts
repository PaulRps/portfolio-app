import {Component, Input, OnInit} from '@angular/core'
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  @Input() group?: AbstractControl

  formGroup!: FormGroup

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.group) {
      this.formGroup = this.group as FormGroup
    } else {
      this.formGroup = this._fb.group({
        technologies: this._fb.array([
          this._fb.control('', Validators.required)
        ])
      })
    }
  }

  get technologies(): FormArray {
    return this.formGroup.get('technologies') as FormArray
  }

  addTechnology() {
    this.technologies.push(this._fb.control('', Validators.required))
  }

  removeTechnology(i: number) {
    this.technologies.removeAt(i)
  }
}
