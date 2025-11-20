import {Component, OnInit, OnDestroy} from '@angular/core'
import {LoadingService} from './loading.service'
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar'
import {Subscription, timer, of} from 'rxjs'
import {distinctUntilChanged, switchMap, tap} from 'rxjs/operators'

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit, OnDestroy {
  isLoading = this.loadingService.getLoading()
  private sub?: Subscription
  private snackRef?: MatSnackBarRef<any>

  constructor(
    private readonly loadingService: LoadingService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    // Show a friendly persistent snackbar only if loading lasts more than 5s.
    // If loading stops before 5s the snackbar is never shown.
    this.sub = this.isLoading
      .pipe(
        distinctUntilChanged(),
        switchMap((loading) => {
          if (loading) {
            return timer(5000).pipe(tap(() => this.openPersistentSnack()))
          }
          // close immediately when loading stops
          return of(null).pipe(tap(() => this.closeSnack()))
        })
      )
      .subscribe()
  }

  private openPersistentSnack() {
    // avoid opening multiple times
    if (this.snackRef) return
    const message =
      'Sorry for the wait — server may be cold-starting. This may take a moment.'
    this.snackRef = this.snackBar.open(message, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['app-snackbar']
      // no duration -> persistent until dismissed
    })
  }

  private closeSnack() {
    this.snackRef?.dismiss()
    this.snackRef = undefined
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
    this.closeSnack()
  }
}
