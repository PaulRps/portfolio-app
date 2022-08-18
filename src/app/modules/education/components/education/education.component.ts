import {Component, Input, OnInit} from '@angular/core'
import {Education} from 'src/app/shared/models/dto/education.dto'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() title?: Education

  constructor() {}

  ngOnInit(): void {}
}
