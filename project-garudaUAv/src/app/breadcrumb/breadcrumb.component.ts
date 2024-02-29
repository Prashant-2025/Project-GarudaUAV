import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  routeNames:any = [];

  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit() {
    setTimeout(() => {
      this.genBreadcrumb();    
    }, 300);
  }

  genBreadcrumb() {
    const states = this.router.url.slice(1).split('.');
    this.routeNames = this.menuService.getMenuLevel(states);
    this.routeNames.unshift('home');
  }
}
