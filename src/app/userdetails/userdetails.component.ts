import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from "../users.model";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  mainuser!: User

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.mainuser = this.userService.userdata;
  }

}
