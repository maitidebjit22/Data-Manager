import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    location: [''],
    mobile: [''],
    password: ['', Validators.required],
    cpassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  get name() {
    return this.registerForm.controls['name'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }
  get location() {
    return this.registerForm.controls['location'];
  }
  get mobile() {
    return this.registerForm.controls['mobile'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }

  get cpassword() {
    return this.registerForm.controls['cpassword'];
  }

  submitDetails() {
    let user = this.registerForm .getRawValue()
    console.log(user)
    if (user.name == '' || user.email == '' || user.location == '' || user.mobile == ''|| user.password == '' || user.cpassword == '') {
      Swal.fire("Error", "Please enter all the fields", "error")

    }
    else
      this.authService.register(user)
        .subscribe(() => this.router.navigate(['/login']), (err) => {
          Swal.fire("Error", err.error.message, "error")
        })

  }
}


