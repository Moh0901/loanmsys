import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddLoanComponent } from './components/add-loan/add-loan.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersComponent } from './components/users/users.component';
import { LoansComponent } from './components/loans/loans.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoanAppService } from './Services/loan-app.service';
import { TokenHandlerInterceptor } from './Interceptor/token-handler.interceptor';
import { EditLoanComponent } from './components/edit-loan/edit-loan.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddLoanComponent,
    HomeComponent,
    PageNotFoundComponent,
    AddUserComponent,
    UsersComponent,
    LoansComponent,
    EditLoanComponent,
    EdituserComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    LoanAppService,
    {
      provide:HTTP_INTERCEPTORS, useClass:TokenHandlerInterceptor, multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
