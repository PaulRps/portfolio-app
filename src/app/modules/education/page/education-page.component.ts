import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/shared/models/dto/title.dto';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent implements OnInit {

  titles?: Title[]

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.getTitles().subscribe(titles => this.titles = titles)
  }

}
