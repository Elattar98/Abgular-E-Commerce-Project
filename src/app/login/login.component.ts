import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";
import { map } from "rxjs/operators";

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  onSubmit(form: NgForm) {

    // console.log(this.userService.loadedData);
    //
    // this.userService.loadedData.forEach(element => {
    //   if (element.username===form.value.username&&element.password===form.value.password) {
    //     this.userService.userdata = element;
    //   }
    // });
    for(let e of this.userService.loadedData){
      if(e.username===form.value.username&&e.password===form.value.password){
        this.userService.userdata = e;
      }
    }
   }

private fetchData(){
  this.http
  .get('https://fakestoreapi.com/users')
  .pipe(map( (responseData: any) => {
    const userArray = [];
    for(const key in responseData){
      if(responseData.hasOwnProperty(key)) {
        userArray.push( { ...responseData[key] } );
      }
    }
    return userArray;
  }))
  .subscribe(data=>{
    this.userService.loadedData = data;
  }
  )
}

}
