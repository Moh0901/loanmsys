import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoanAppService } from 'src/app/Services/loan-app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers:any;
  p:number=1;
  constructor(private loanAppService:LoanAppService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem("jwt")){
      this.loanAppService.getAllUsers().subscribe(res=>{
        this.allUsers=res;
        console.log(this.allUsers)
      })
    }
  }
  deleteUser(id:any) {
    this.loanAppService.removeUser(id).subscribe(res=>{
      console.log(res)
      this.toastr.success("User Deleted Successfully")
      this.ngOnInit();
      window.location.reload();
    })
  }

}
