import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.registerForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    });
  }

  submit(): void {
    this.http
      .post(
        'http://localhost:3000/api/register',
        this.registerForm.getRawValue()
      )
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
