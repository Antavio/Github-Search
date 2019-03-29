import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-request/profile.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;


  constructor(private profService:ProfileService) { 
    // console.log(this.profService)
  }

  ngOnInit() {
    this.profService.getInfo();
    this.user=this.profService.user
  }

}
