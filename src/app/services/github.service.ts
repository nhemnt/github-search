import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService{
  private userName: String;
  private client_id = '80b6fdf291838637b391';
  private client_secret= 'a69ab407132059ae30e74221535807b4ff38fbbb';
  constructor(private _http: Http){
    console.log('Github service is started');
    this.userName='nhemnt';
  }
  getUser(){
    return this._http.get('https://api.github.com/users/'+ this.userName+ '?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }
  getRepos(){
    return this._http.get('https://api.github.com/users/'+ this.userName+ '/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }
  updateUsername(username:string){
    this.userName= username;
  }
}
