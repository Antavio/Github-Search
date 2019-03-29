import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {User} from '../user';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProfileService {

  user:User
  constructor(private http:HttpClient) {
    this.user = new User("");
   } 

   getInfo(){

    interface UserInfo{
      login:string;
      

  }
     return this.http.get<UserInfo>(environment.apiUrl+environment.access_token).subscribe(data=>{
      this.user.login= data.login
      console.log(data.login);
     })
   }
}
// "https://api.github.com/users/Antavio?access_token=d0516c8c29f1f42895f969ce6cac48ba41506d23"