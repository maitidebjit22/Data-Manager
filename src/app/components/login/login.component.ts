import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) { }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }
  token:any;
  loginUser() {
    let user = this.loginForm.getRawValue()
    if(user.email == "" || user.password == ""){
      alert("Please enter login Id & Password")
    }else{
      this.authService.login(user).subscribe(
        res => {
          this.token = res;
          //{myToken:'qddqssdsqd'}
          localStorage.setItem('token', this.token.myToken)
          
          this.router.navigate(['/dashboard']);
        },
        err => {
          alert("Email or password is not correct");
        }
      );
    }
  }
}

