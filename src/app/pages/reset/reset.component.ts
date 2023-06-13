import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  token: string = '';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.form = this.formBuilder.group({
      password: '',
      confirm_password: '',
    });

    this.route.params.subscribe((param: Params) => {
      this.token = param['token'];
    });
  }

  submit(): void {
    let data: any = { ...this.form.getRawValue() };
    data.token = this.token;
    console.log('data', data);
    this.http.post('http://localhost:3000/api/reset', data).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
