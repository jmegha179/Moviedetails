import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginAuthService } from '../../Service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /**
   * used to store Form Value
   */
  registerForm: FormGroup;
  /**
   * used to store Form changes Value
   */
  registerFormValue: { email: string; password: string };

  constructor(private authService: LoginAuthService, public toastr: ToastrService,private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      returnSecureToken: new FormControl(true)
    });

    this.registerForm.valueChanges.subscribe(value => {
      this.registerFormValue = value;
      console.log(this.registerFormValue);
    });
  }

  // function for reistration
  register() {
    this.spinner.show();
    this.authService.registerUser(this.registerFormValue).subscribe(
      response => {
        if (response) {
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 2000);
          this.toastr.success('you can login', 'Successfully Regaister!', {
            timeOut: 2000
          });
        }
      },
      error => {
        alert(error);
      }
    );
  }
}
