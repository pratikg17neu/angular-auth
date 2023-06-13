import { Component, OnInit } from '@angular/core';
import { Auth } from '../classes/auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  authenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    Auth.authEmitter.subscribe((authenticated: boolean) => {
      this.authenticated = authenticated;
    });
  }

  onLogout() {
    this.http.post('http://localhost:3000/api/logout', {}).subscribe(() => {
      Auth.authEmitter.emit(false);
      this.router.navigate(['/login']);
    });
  }
}
