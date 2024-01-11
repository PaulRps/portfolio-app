import {Component, OnInit} from '@angular/core'
import {LoadingService} from './loading.service'
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  isLoading = this.loadingService.getLoading()
  private timeoutId?: any
  private snackRef: any

  constructor(
    private readonly loadingService: LoadingService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.isLoading.subscribe((loading) => {
      if (loading) {
        this.startTimeout()
      } else {
        this.stopTimeout()
      }
    })
  }

  private toastMessage(msg: string) {
    this.snackRef = this.snackBar.open(msg, 'close', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3600 * 1000
    })
  }

  private startTimeout() {
    this.timeoutId = setTimeout(() => {
      this.toastMessage(
        'Sorry for make you wait, the api is hosted in a free server and it takes time to boot it. Stay here to see what i did.'
      )
    }, 5000)
  }

  private stopTimeout() {
    clearTimeout(this.timeoutId)
    this.snackRef?.dismiss()
  }
}
