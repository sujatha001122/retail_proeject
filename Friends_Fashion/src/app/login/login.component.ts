import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  value11:any;
  value1:any;
  submit:any[]=[];
  userName = String;
  password:any;
  user:any;
  constructor() { }

  ngOnInit(): void {

  }
  OnSubmit() {
    this.submit = [{
      userName: this.user,
      password: this.password
    }];
  }
 
}
