import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {LoadingService} from '../loading-screen/loading.service'

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = []

  constructor(private readonly loadingService: LoadingService) {}

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req)
    if (i >= 0) {
      this.requests.splice(i, 1)
    }
    this.loadingService.setLoading(this.requests.length > 0)
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requests.push(req)

    this.loadingService.setLoading(true)
    return new Observable((observer) => {
      const subscription = next.handle(req).subscribe(
        (event) => {
          if (event instanceof HttpResponse) {
            this.removeRequest(req)
            observer.next(event)
          }
        },
        (err) => {
          this.removeRequest(req)
          observer.error(err)
        },
        () => {
          this.removeRequest(req)
          observer.complete()
        }
      )
      // remove request from queue when cancelled
      return () => {
        this.removeRequest(req)
        subscription.unsubscribe()
      }
    })
  }
}
