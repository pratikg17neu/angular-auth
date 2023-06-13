import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent {
  forgotForm!: FormGroup;
  cls = '';
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.forgotForm = this.formBuilder.group({
      email: '',
    });
  }

  submit(): void {
    this.http
      .post('http://localhost:3000/api/forgot', this.forgotForm.getRawValue())
      .subscribe(
        (data) => {
          this.cls = 'success';
          this.message = 'Email was sent';
        },
        () => {
          this.cls = 'danger';
          this.message = 'Email does not exist!';
        }
      );
  }
}
