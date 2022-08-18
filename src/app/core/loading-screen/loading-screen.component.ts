import { Component } from '@angular/core'
import { LoadingService } from './loading.service'

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent {
  isLoading = this.loadingService.getLoading()
  constructor(private readonly loadingService: LoadingService) {}
}
