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

  constructor(private loanAppService: LoanAppService, private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addUserForm= new FormGroup({
    name: new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z].*") ]),
    username: new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z].*") ]),
    password: new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    role: new FormControl("",[Validators.required]),
  });

  addUserSubmitted(){
    this.loanAppService.addUser({
      name: this.addUserForm.value.name,
      username: this.addUserForm.value.username,
      password: this.addUserForm.value.password,
      role: this.addUserForm.value.role,
    }).subscribe(res=>{
      console.log(res);
      this.toastr.success("User Added Suceessfully")
      this.router.navigate(["/users"]);
    })
  }

get Name(): FormControl{
  return this.addUserForm.get("name") as FormControl;
}

get userName(): FormControl{
  return this.addUserForm.get("username") as FormControl;
}

get Password(): FormControl{
  return this.addUserForm.get("password") as FormControl;
}

get Role(): FormControl{
  return this.addUserForm.get("role") as FormControl;
}
}
