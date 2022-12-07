import { Component, OnInit } from '@angular/core';
import { LoanAppService } from 'src/app/Services/loan-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loanAppService:LoanAppService) { }

  jwt:boolean = this.loanAppService.isLoggedin();

  ngOnInit(): void {
  }

}
