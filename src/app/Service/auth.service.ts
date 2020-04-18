import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  /**
   * used to store base url value for Login
   */
  baseUrlLogin = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFrNCkROyqIfBE09XWKZl4Y6fjYIeI2Rk';
 
  /**
   * used to store login mode
   */
  baseUrlSignUp = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFrNCkROyqIfBE09XWKZl4Y6fjYIeI2Rk';


  loginMode: BehaviorSubject<any> = new BehaviorSubject(false);
  loginData: Subject<any> = new Subject();
  constructor(private http: HttpClient) {}

  loginUser(loginCredential) {
    return this.http.post(this.baseUrlLogin, loginCredential);
  }

  registerUser(registerCredential) {
    return this.http.post(this.baseUrlSignUp , registerCredential);
  }
}
