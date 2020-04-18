import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies Details';
  constructor(private router: Router, ) { }
  Logout() {
    sessionStorage.removeItem('access-token');
    sessionStorage.removeItem('access-id-token');
    this.router.navigate(['/']);

  }
}
