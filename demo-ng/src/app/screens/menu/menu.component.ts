import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-menu',
  moduleId: module.id,
  styleUrls: ['./menu.component.css'],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  constructor(
    private router: Router
  ) {
  }

  businessByPhone() {
    this.router.navigate(['/search', {type: 'searchByPhone'}]);
  }

  reviewByPhone() {
    this.router.navigate(['/search']);
  }
}