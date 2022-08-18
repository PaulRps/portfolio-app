import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(false)
  private loadingObservable = this.loading.asObservable()

  constructor() {}

  public getLoading(): Observable<boolean> {
    return this.loadingObservable
  }

  public setLoading(isLoading: boolean) {
    this.loading.next(isLoading)
  }
}
