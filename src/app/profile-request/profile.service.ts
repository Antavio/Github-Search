import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import { environment } from 'src/environments/environment';
import { Repository } from '../repository';

@Injectable()
export class ProfileService {

  user:User;
  repos:Repository[];
  public username:string;
  public newUsername:string;

  constructor(private http:HttpClient) {
    // this.user.login = "Antavio";
    this.user = new User("","","",0,0,"","","");
    this.repos= [];
    this.username = "Antavio";
    this.newUsername='';
    
   } 

   getInfo(){

    interface UserInfo{
      login:string;
      avatar_url:string;
      public_repos:string;
      followers:number;
      following:number;
      html_url:string;
      created_at:string;
      bio:string;

  }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<UserInfo>(environment.apiUrl+this.username +environment.access_token).toPromise().then(response=>{
        this.user.login= response.login
        this.user.avatar_url = response.avatar_url
        this.user.public_repos = response.public_repos
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.html_url=response.html_url
        this.user.created_at=response.created_at
        this.user.bio=response.bio
        
        resolve()
       },error=>{
         this.user.login = "Error Fetching Data"
         this.user.avatar_url = "Error Fetching Data"
         this.user.public_repos = "Error"
         reject(error)
       })
    })
     return promise
   }

   //Repo Info
   getRepoInfo(){

    interface APInfo{
      name:string;
      html_url:string;
      description:string;
      
  }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<APInfo[]>(environment.apiUrl+this.username + "/repos" +environment.access_token).toPromise().then(response=>{
        
        response.forEach(repo => {
          this.repos.push(new Repository(repo.name, repo.html_url, repo.description))
         
        });
        
        
        resolve()
        
       },error=>{
        //  this.repos.description = "Error Fetching Data"
         reject(error)
       })
    })
     return promise
   }

   updateProfile(username:string){
    this.username = username;
    
  }

  
}
