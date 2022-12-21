import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoanAppService } from 'src/app/Services/loan-app.service';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],

})

export class LoansComponent implements OnInit {

  allLoans: any;
  role: any = localStorage.getItem("role")
  firstname: any;
  lnum: any;
  p: number = 1;
  searchText = '';
  key = 'fname';
  reverse: boolean = false;

  constructor(private loanAppService: LoanAppService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("jwt")) {
      this.loanAppService.getAllLoans().subscribe(res => {
        this.allLoans = res;
        console.log(this.allLoans)
        //captialize first charater
        this.allLoans.forEach((element: any) => {
          element.fname = element.fname.charAt(0).toUpperCase() + element.fname.slice(1)
        });
      })
    }
  }

  deleteLoan(id: any) {
    this.loanAppService.removeLoan(id).subscribe(res => {
      console.log(res)
      this.toastr.success("Loan Deleted Successfully");
      this.ngOnInit();
      window.location.reload();
    })
  }

  //for sorting 
  sortByName(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  // SearchByName() {
  //   if (this.firstname == "") {
  //     this.ngOnInit();
  //   }
  //   else{
  //     this.allLoans = this.allLoans.filter((r: any) => {
  //        return r.fname.toLocaleLowerCase().includes(this.firstname.toLocaleLowerCase());
  //     })
  //   }
  // }

  // SearchByLNum(){
  //   if(this.searchText==""){
  //     this.ngOnInit();
  //   }
  //   else{
  //     this.allLoans = this.allLoans.filter((re: any)=>{
  //       return re.lnum.toString().toLocaleLowerCase().includes(this.lnum.toLocaleLowerCase());
  //     })
  //   }
  // }
}

