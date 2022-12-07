import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoanAppService } from 'src/app/Services/loan-app.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  constructor(private loanAppService: LoanAppService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addLoanForm= new FormGroup({
    firstname: new FormControl("",[Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    amount: new FormControl("", [Validators.required]),
    lnum: new FormControl("", [Validators.required]),
    ltype: new FormControl("", [Validators.required]),
    lterm: new FormControl("", [Validators.required]),
  });

  addLoanSubmitted(){
    this.loanAppService.addLoan({
      fname: this.addLoanForm.value.firstname,
      lname: this.addLoanForm.value.lastname,
      paddress: this.addLoanForm.value.address,
      lamount: this.addLoanForm.value.amount,
      lnum: this.addLoanForm.value.lnum,
      ltype: this.addLoanForm.value.ltype,
      lterm: this.addLoanForm.value.lterm
    }).subscribe(res=>{
      console.log(res);
      this.toastr.success("Loan Added Suceessfully")
      this.router.navigate(["/loans"]);
    })
  }
  


get fName(): FormControl{
  return this.addLoanForm.get("firstname") as FormControl;
}

get lName(): FormControl{
  return this.addLoanForm.get("lastname") as FormControl;
}

get pAddress(): FormControl{
  return this.addLoanForm.get("address") as FormControl;
}

get lAmount(): FormControl{
  return this.addLoanForm.get("amount") as FormControl;
}

get lNum(): FormControl{
  return this.addLoanForm.get("lnum") as FormControl;
}

get lType(): FormControl{
  return this.addLoanForm.get("ltype") as FormControl;
}

get lTerm(): FormControl{
  return this.addLoanForm.get("lterm") as FormControl;
}

}
