import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoanAppService } from 'src/app/Services/loan-app.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  isdisable:boolean = true;
  constructor(private loanAppService:LoanAppService, private router:ActivatedRoute, private routeurl:Router, private toastr:ToastrService) { }

  editUserForm= new FormGroup({
    name: new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z]*") ]),
    username: new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z].*") ]),
    password: new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    role: new FormControl("",[Validators.required]),
  });

  ngOnInit(): void {
    this.loanAppService.getUserById(this.router.snapshot.params['id'])
    .subscribe((res:any)=>{
      console.log(res)
      this.editUserForm= new FormGroup({
        name: new FormControl(res["name"],[Validators.required, Validators.pattern("[a-zA-Z]*")]),
        username: new FormControl(res["username"],[Validators.required, Validators.pattern("[a-zA-Z].*")]),
        password: new FormControl(res["password"],[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
        role: new FormControl(res["role"],[Validators.required]),
    })
  })
 }
  

  editUserSubmitted(){
    this.loanAppService.editUser(this.router.snapshot.params['id'],{
      name: this.editUserForm.value.name,
      username: this.editUserForm.value.username,
      password: this.editUserForm.value.password,
      role: this.editUserForm.value.role
    }).subscribe(res=>{
      console.log(res);
      this.toastr.success("User Updated Sucessfully")
      this.routeurl.navigate(["/users"]);
    })
  }

  get Name(): FormControl{
    return this.editUserForm.get("name") as FormControl;
  }
  
  get userName(): FormControl{
    return this.editUserForm.get("username") as FormControl;
  }
  
  get Password(): FormControl{
    return this.editUserForm.get("password") as FormControl;
  }
  
  get Role(): FormControl{
    return this.editUserForm.get("role") as FormControl;
  }

  // onSearch(username:any){
  //   if(username==""){
  //     this.ngOnInit();
  //   }
  //   else{
  //     this.loanAppService.getAllUsers.filter()
  //   }
  // }

}
