import { Component, Input, OnInit } from '@angular/core';
import { AboutDto } from 'src/app/shared/models/dto/about.dto';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss']
})
export class SocialMediasComponent implements OnInit {

  @Input() profile?: AboutDto;

  constructor() { }

  ngOnInit(): void {
    console.log(this.profile);
    
  }

}

