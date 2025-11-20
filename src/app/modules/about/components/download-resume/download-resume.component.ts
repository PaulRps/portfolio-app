import {Component} from '@angular/core'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar'
import {DownloadResumeService} from './download-resume.service'

@Component({
  selector: 'app-download-resume',
  templateUrl: './download-resume.component.html',
  styleUrls: ['./download-resume.component.scss']
})
export class DownloadResumeComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'

  constructor(
    private readonly resumeService: DownloadResumeService,
    private snackBar: MatSnackBar
  ) {}

  download() {
    this.resumeService.download().subscribe((resume) => {
      const fileURL = window.URL.createObjectURL(resume)
      const opened = window.open(fileURL, '_blank')
      if (!opened) this.toastMessage('unblock popup to get the resume')
    })
  }

  private toastMessage(msg: string) {
    this.snackBar.open(msg, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 10 * 1000,
      panelClass: ['app-snackbar']
    })
  }
}
