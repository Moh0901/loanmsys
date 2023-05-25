import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoanAppService } from 'src/app/Services/loan-app.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  arrayUsername: string[] = [];
  users: []= [];
  constructor(private loanAppService: LoanAppService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loanAppService.getAllUsers()
      .subscribe({
        next: (user) => {
          this.users = user;
          this.arrayUsername = user.map((x: any) => x.username.toLowerCase());
          console.log(this.arrayUsername);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  addUserForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z]*[ ]*[a-zA-Z]*")]),
    username: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z].*"),this.chkuserValidator.bind(this)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    role: new FormControl("", [Validators.required]),
  });

  addUserSubmitted() {
    this.loanAppService.addUser({
      name: this.addUserForm.value.name,
      username: this.addUserForm.value.username,
      password: this.addUserForm.value.password,
      role: this.addUserForm.value.role,
    }).subscribe(res => {
      console.log(res);
      this.toastr.success("User Added Suceessfully")
      this.router.navigate(["/users"]);
    })
  }

  //to check user already exist or not
  chkuserValidator(control:FormControl){
    if(this.arrayUsername.indexOf(control.value.toLowerCase())!==-1){
      return {'nameIsNotAllowed':true}
    }
    return null;
  }

  get Name(): FormControl {
    return this.addUserForm.get("name") as FormControl;
  }

  get userName(): FormControl {
    return this.addUserForm.get("username") as FormControl;
  }

  get Password(): FormControl {
    return this.addUserForm.get("password") as FormControl;
  }

  get Role(): FormControl {
    return this.addUserForm.get("role") as FormControl;
  }
}

//