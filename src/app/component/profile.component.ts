import { Component } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent  {
  user:any;
  repos:any[];
  username:string;
  constructor(private _githubService: GithubService){
    this.user=false;
  }
  searchUser(){
    this._githubService.updateUsername(this.username);

    this._githubService.getUser()
      .subscribe(user => {
        // console.log(user)
        this.user= user;
      });
    this._githubService.getRepos()
      .subscribe(
        repos => {
          this.repos=repos;
          // console.log(repos);
        }
      )
  }
}
