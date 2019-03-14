import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  userName = 'eric';
  isUser;
  followersDetails: any = [];
  data: any;
  labels: any = [];
  dataValue: any = [];

  constructor(private http: Http) { }


  ngOnInit() {
    this.http.get('https://api.github.com/search/users?q=' + this.userName)
      .subscribe(
      (res: Response) => {
        this.isUser = res.json();
        var x = this.isUser.items

        for (let i of x) {
          this.http.get('https://api.github.com/users/' + i.login)
            .subscribe(
            (res: Response) => {
              this.followersDetails.push(res.json());
              this.sortFollowers();
            });
        }
        // console.log("sort:", this.followersDetails)
        console.log(this.dataValue)
        console.log(this.labels)
      }
      )
  }

  sortFollowers() {
    this.followersDetails.sort(function (a, b) {
      return a.followers > b.followers ? -1 : 1;
    });
    this.labels = [];
    this.dataValue = [];
    let temp = [];
    temp = this.followersDetails.slice(0, 10);
    for (let i of temp) {
      this.labels.push(i.name);
      this.dataValue.push(i.followers);
    }
    this.barchartFollowers();
  }

  barchartFollowers() {
    this.data = {
      labels: this.labels,
      datasets: [{
        label: 'Followers Datset',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: this.dataValue
      }
      ]
    }
  }
}
