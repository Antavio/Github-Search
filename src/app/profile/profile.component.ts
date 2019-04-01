import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-request/profile.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  repo:Repository[];
  public username:string;
  
  constructor(private profService:ProfileService) { 
    // console.log(this.profService)
    
  }

  findUser(){
    this.profService.updateProfile(this.username);
    this.profService.getInfo();
    this.profService.getRepoInfo();
  }

  ngOnInit() {
    this.profService.getInfo();    
    this.profService.getRepoInfo();
    this.user=this.profService.user
    this.repo=this.profService.repos
  }

}
