import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  isLoading = false

  constructor(private readonly loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.isLoading.subscribe(isLoading =>
      this.isLoading = isLoading
    )
  }

}
