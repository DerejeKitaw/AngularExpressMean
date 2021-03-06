import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardLoginService } from './services/auth-guard-login.service';
import { AuthGuardAdminService } from './services/auth-guard-admin.service';
import { CountysComponent } from './countys/countys.component';
import { InvertersComponent } from './inverters/inverters.component';
import { PanelsComponent } from './panels/panels.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLoginService] },
  { path: 'countys', component: CountysComponent, canActivate: [AuthGuardLoginService] },
  { path: 'inverters', component: InvertersComponent, canActivate: [AuthGuardLoginService] },
  { path: 'panels', component: PanelsComponent, canActivate: [AuthGuardLoginService] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdminService] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
