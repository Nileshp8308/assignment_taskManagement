import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface authObject {
  username: string ;
  passowrd: string ;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup
  authObject: Array<authObject> = [{
    username: "admin@gmail.com",
    passowrd: "Admin@123"
  }]

  constructor(private builder: FormBuilder, private router: Router, private toaster: ToastrService) { }

  ngOnInit() {
    this.createloginForm()
  }

  createloginForm() {
    this.loginForm = this.builder.group({
      userName: [, Validators.required],
      password: [, Validators.required]
    })
  }


  get form() {
    return this.loginForm.controls
  }

  submit() {
    this.authObject.find((item: authObject) => {
      if (item.username == this.loginForm.controls['userName'].value
        && item.passowrd == this.loginForm.controls['password'].value) {
        this.toaster.success("Login Successfull")
        this.router.navigateByUrl('/dash/dashboard')
      }
      else {
        this.toaster.warning("Enter Valid Username and Passoword")
      }

    })
  }
}
