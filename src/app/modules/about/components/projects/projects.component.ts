import {Component, Input, OnInit} from '@angular/core'
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() group?: AbstractControl

  formGroup!: FormGroup

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.group) {
      this.formGroup = this.group as FormGroup
    } else {
      this.formGroup = this._fb.group({
        projects: this._fb.array([this._fb.control('', Validators.required)])
      })
    }
  }

  get projects(): FormArray {
    return this.formGroup.get('projects') as FormArray
  }

  addProject() {
    this.projects.push(this._fb.control('', Validators.required))
  }

  removeProject(i: number) {
    this.projects.removeAt(i)
  }
}
