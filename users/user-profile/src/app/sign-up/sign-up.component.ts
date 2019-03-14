import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpUserData = {}

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  signUpUser() {
    this._auth.signUpUser(this.signUpUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/login'])
        },
        err => console.log(err)
      )
  }

}
