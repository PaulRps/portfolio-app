import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/shared/models/dto/title.dto';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title?: Title;

  constructor() { }

  ngOnInit(): void {
  }

}
