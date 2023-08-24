import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() appTitle!: string;

  constructor(private readonly router: Router) {}

  searchForUsers() {
    this.router.navigate(['search-user']);
  }

  searchForFollowers() {
    this.router.navigate(['followers']);
  }
}
