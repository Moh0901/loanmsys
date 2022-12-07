import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './AuthGuard/login.guard';
import { AddLoanComponent } from './components/add-loan/add-loan.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditLoanComponent } from './components/edit-loan/edit-loan.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { HomeComponent } from './components/home/home.component';
import { LoansComponent } from './components/loans/loans.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home',     component: HomeComponent },
  { path: 'loans',    component: LoansComponent, canActivate:[LoginGuard] },
  { path: 'users',    component: UsersComponent, canActivate:[LoginGuard] },
  { path: 'addloan',  component: AddLoanComponent, canActivate:[LoginGuard] },
  { path: 'adduser',  component: AddUserComponent, canActivate:[LoginGuard] },
  { path: 'edituser/:id', component: EdituserComponent, canActivate:[LoginGuard]  },
  { path: 'editloan/:id', component: EditLoanComponent, canActivate:[LoginGuard] },
  { path: '**',       component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
