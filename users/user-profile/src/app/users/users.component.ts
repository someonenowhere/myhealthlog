import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // public Users = []
  userName = '';
  isUser;
  totalCount;

  // constructor(private _usersService: UsresService) { }
  constructor(private http: Http, private _router: Router) { }

  userProfile() {
    this.http.get('https://api.github.com/search/users?q=' + this.userName)
      .subscribe(
        (res: Response) => {
          this.isUser = res.json();
          this.totalCount = this.isUser.total_count;
          console.log(this.isUser);
        }
      )
  }


  ngOnInit() {
  }

  onSelect(obj) {
    this._router.navigate(['profile', obj.login])
  }

}
