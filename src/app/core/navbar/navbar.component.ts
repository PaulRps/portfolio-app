import {Component, OnInit} from '@angular/core'
import {ThemePalette} from '@angular/material/core'
import {NavigationEnd, Router} from '@angular/router'
import {MenuDto} from 'src/app/shared/models/dto/menu.dto'
import {NavbarService} from './navbar.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  color: ThemePalette = 'primary'
  menus: MenuDto[] = []
  activeMenu?: MenuDto = undefined

  constructor(private menuService: NavbarService, private router: Router) {}

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((menus) => {
      this.menus = menus
    })

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.activeMenu = this.menus.find((m) => m.route == event.url)
    })
  }

  route(menu: MenuDto) {
    this.activeMenu = menu
    this.router.navigateByUrl(menu.route)
  }
}
