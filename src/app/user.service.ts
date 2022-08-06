import { Injectable } from '@angular/core';

import { User } from "./users.model";

@Injectable({ providedIn: 'root' })

export class UserService{
  loadedData:any[]=[];
  userdata:User = {
    address:{
      geolocation:{
        lat:"",long:""
      },city:"",street:"",number:0,zipcode:""
    },id:0,email:"",username:"",password:"",name:{
      firstname:"",lastname:""
    },phone:"",__v:0
  }
}
