import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanAppService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://localhost:7200/";
  baseUl = "https://localhost:7172/";


  //////////////////////////////// Login //////////////////////////////
  
  login(user:any)
  {
    return this.http.post(this.baseUl+"api/Auth/",user,{responseType:'text',})
  }

  isLoggedin():boolean{
    return localStorage.getItem("jwt")?true:false;
  }

  ////////////////////////////////////// User //////////////////////////////////

  getAllUsers():Observable<any>{
    return this.http.get(this.baseUl+"api/Users")
  }

  getUserById(id:any):Observable<any>{
    return this.http.get(this.baseUl+"api/Users/"+id)
  }

  addUser(user:any):Observable<any>{
    return this.http.post(this.baseUl+"api/Users/",user)
  }

  editUser(id:any, model:any):Observable<any>{
    return this.http.put(this.baseUl+"api/Users/"+id,model)
  }

  removeUser(id:any):Observable<any>{
    return this.http.delete(this.baseUl+"api/Users/"+id)
  }

  ////////////////////////////////////// Loan ///////////////////////////////////

  getAllLoans():Observable<any>{
    return this.http.get(this.baseUrl+"api/Loans")
  }

  getLoanById(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"api/Loans/"+id)
  }

  addLoan(loan:any):Observable<any>{
    return this.http.post(this.baseUrl+"api/Loans/",loan)
  }

  editLoan(id:any, model:any):Observable<any>{
    return this.http.put(this.baseUrl+"api/Loans/"+id,model)
  }

  removeLoan(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"api/Loans/"+id)
  }
}
