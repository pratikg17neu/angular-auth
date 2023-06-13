import { Auth } from './../../classes/auth';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  message: string = '';

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/user').subscribe(
      (res: any) => {
        this.message = `Hello, ${res.first_name} ${res.last_name}`;
        Auth.authEmitter.emit(true);
      },
      () => {
        this.message = `you are not logged in`;
        Auth.authEmitter.emit(false);
      }
    );
  }
}
