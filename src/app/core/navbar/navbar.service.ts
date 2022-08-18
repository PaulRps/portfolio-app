import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {MenuDto} from 'src/app/shared/models/dto/menu.dto'

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor() {}

  getMenus(): Observable<MenuDto[]> {
    return new Observable((observer) => {
      observer.next([
        {name: 'About', route: '/about'},
        {name: 'Experience', route: '/experience'},
        {name: 'Education', route: '/education'},
        {name: 'Projects', route: '/projects'}
        // { name: 'About me', route: '/aboutme' },
        // { name: 'Contact me', route: '/contactme' }
      ])
      observer.complete()
    })
  }
}
