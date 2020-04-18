import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../Service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * used to store login Form Information
   */
  loginFrom: FormGroup;

  /**
   * used to store updated valus login Form
   */
  formData: { email: string; password: string };

  constructor(
    private authService: LoginAuthService,
    private router: Router,
    public toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.loginFrom = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      returnSecureToken: new FormControl(true)
    });

    this.loginFrom.valueChanges.subscribe(response => {
      this.formData = response;
    });
  }

  // login function
  login() {
    this.spinner.show();
    if (this.loginFrom.invalid) {
      return;
    }
    this.authService.loginUser(this.formData).subscribe(
      response => {
          if (response['idToken']) {
            this.authService.loginData.next(this.formData);
            setTimeout(() => {
              /** spinner ends after 5 seconds */
              this.spinner.hide();
            }, 2000);
            sessionStorage.setItem('access-token', response['idToken']);
            this.loginFrom.reset();
            this.toastr.success('Welcome to Dashboard', 'Successfully Login!', {
              timeOut: 2000
            });
            this.router.navigate(['/movies']);
          } else {
            this.toastr.error('Check your Credential', 'unauthorized user', {
              timeOut: 2000
            });
            this.loginFrom.reset();
          }
      }, error => {
        this.toastr.error('Server Error', 'Please your check you credential', {
          timeOut: 2000
        });
        this.spinner.hide();
        this.loginFrom.reset();
      }
    );
  }
}
