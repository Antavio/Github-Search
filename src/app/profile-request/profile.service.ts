import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import { environment } from 'src/environments/environment';
import { Repository } from '../repository';

@Injectable()
export class ProfileService {

  user:User;
  repo:Repository
  public username:string;

  constructor(private http:HttpClient) {
    // this.user.login = "Antavio";
    this.user = new User("","","",0,0,"");
    this.repo= new Repository("");
    this.username = "Antavio";
    
   } 

   getInfo(){

    interface UserInfo{
      login:string;
      avatar_url:string;
      public_repos:string;
      followers:number;
      following:number;
      html_url:string;

  }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<UserInfo>(environment.apiUrl+this.username +environment.access_token).toPromise().then(response=>{
        this.user.login= response.login
        this.user.avatar_url = response.avatar_url
        this.user.public_repos = response.public_repos
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.html_url=response.html_url
        console.log(this.user);
        resolve()
       },error=>{
         this.user.login = "Error Fetching Data"
         reject(error)
       })
    })
     return promise
   }

   //Repo Info
   getRepoInfo(){

    interface APInfo{
      description:string;
      
  }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<APInfo>(environment.apiUrl+this.username + "/repos" +environment.access_token).toPromise().then(response=>{
        this.repo.description= response.description
        
        console.log(this.repo);
        resolve()
       },error=>{
         this.repo.description = "Error Fetching Data"
         reject(error)
       })
    })
     return promise
   }

   updateProfile(username:string){
    this.username = username;
  }

}
// "https://api.github.com/users/Antavio/repos?access_token=d0516c8c29f1f42895f969ce6cac48ba41506d23"