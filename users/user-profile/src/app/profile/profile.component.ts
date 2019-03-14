import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: any;
  userDetails;
  avatar_url: any;

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.name = params['name'];
        console.log(this.name)
      });

    this.http.get('https://api.github.com/users/' + this.name)
      .subscribe(
        (res: Response) => {
          this.userDetails = res.json();
          console.log(this.userDetails);
        });
  }

}
