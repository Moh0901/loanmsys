import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoanAppService } from 'src/app/Services/loan-app.service';

@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {

  constructor(private loanAppService:LoanAppService, private router:Router, private activeRoute:ActivatedRoute, private toastr:ToastrService) { }

  editLoanForm= new FormGroup({
    firstname: new FormControl("",[Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    amount: new FormControl("", [Validators.required]),
    lnum: new FormControl("", [Validators.required]),
    ltype: new FormControl("", [Validators.required]),
    lterm: new FormControl("", [Validators.required]),
  });
  
  ngOnInit(): void {
    this.loanAppService.getLoanById(this.activeRoute.snapshot.params['id'])
    .subscribe((res:any)=>{
      console.log(res)
      this.editLoanForm= new FormGroup({
        firstname: new FormControl(res["fname"],[Validators.required]),
        lastname: new FormControl(res["lname"], [Validators.required]),
        address: new FormControl(res["paddress"], [Validators.required]),
        amount: new FormControl(res["lamount"], [Validators.required]),
        lnum: new FormControl(res["lnum"], [Validators.required]),
        ltype: new FormControl(res["ltype"], [Validators.required]),
        lterm: new FormControl(res["lterm"], [Validators.required]),
      })
  })
 }

  editLoanSubmitted(){
    this.loanAppService.editLoan(this.activeRoute.snapshot.params['id'],{
      fname: this.editLoanForm.value.firstname,
      lname: this.editLoanForm.value.lastname,
      paddress: this.editLoanForm.value.address,
      lamount: this.editLoanForm.value.amount,
      lnum: this.editLoanForm.value.lnum,
      ltype: this.editLoanForm.value.ltype,
      lterm: this.editLoanForm.value.lterm
    }).subscribe(res=>{
      console.log(res);
      this.toastr.success("Loan Updated Sucessfully")
      this.router.navigate(["/loans"]);
    })
  }

  get fName(): FormControl{
    return this.editLoanForm.get("firstname") as FormControl;
  }
  
  get lName(): FormControl{
    return this.editLoanForm.get("lastname") as FormControl;
  }
  
  get pAddress(): FormControl{
    return this.editLoanForm.get("address") as FormControl;
  }
  
  get lAmount(): FormControl{
    return this.editLoanForm.get("amount") as FormControl;
  }
  
  get lNum(): FormControl{
    return this.editLoanForm.get("lnum") as FormControl;
  }
  
  get lType(): FormControl{
    return this.editLoanForm.get("ltype") as FormControl;
  }
  
  get lTerm(): FormControl{
    return this.editLoanForm.get("lterm") as FormControl;
  }

}
