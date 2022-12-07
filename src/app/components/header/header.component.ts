import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { LoanAppService } from 'src/app/Services/loan-app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role:any=localStorage.getItem("role")
  token:any=localStorage.getItem("jwt")
  constructor(private loanAppService: LoanAppService, private router: Router,private toastr: ToastrService) { }
  jwt:any = localStorage.getItem("jwt");
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  ngOnInit(): void {
  }

  logInForm = new FormGroup({
    username: new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z].*")]),
    password: new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(15)])
  });

  login(){
    this.loanAppService.login({
      username: this.logInForm.value.username,
      password: this.logInForm.value.password
    }).subscribe({
      next: (response:any)=> { console.log(response);
      localStorage.setItem('jwt',response);
      this.toastr.success("Login Successfully")
      this.router.navigate(["/home"]);
      this.logInForm.reset();
      this.loadCurrentUser();
      window.location.reload();
      },
      error: (err: HttpErrorResponse)=>{
        // console.log( this.logInForm.value.username,
        //   this.logInForm.value.password);
        this.logInForm.reset();
        this.toastr.warning("Please Enter Valid Credentials");
      }
    })
  }
  jwtHelperService = new JwtHelperService();
  loadCurrentUser(){
    const token:any = localStorage.getItem("jwt");
    const userinfo = this.jwtHelperService.decodeToken(token);
     const data = userinfo?{
      username:userinfo.username,
      userrole:userinfo.Role
     }:null;
     localStorage.setItem("role",userinfo.role);
     this.currentUser.next(data);
  }

  logout=()=>{
    localStorage.clear();
    this.toastr.success("LogOut Successfully")
    this.router.navigate(["/home"]);
    setTimeout(function(){window.location.reload(); }, 100);
  }

  get userName():FormControl{
    return this.logInForm.get("username") as FormControl;
  }
 
  get Password():FormControl{
    return this.logInForm.get("password") as FormControl;
  }
}
