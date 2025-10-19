import {Component, OnInit} from '@angular/core'
import {AboutDto} from 'src/app/shared/models/dto/about.dto'
import {AboutService} from '../../about.service'

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  about?: AboutDto

  constructor(private readonly aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((about) => (this.about = about))
  }
}
