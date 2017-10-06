import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { RoutingModule } from './routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuardAdminService } from './services/auth-guard-admin.service';
import { AuthGuardLoginService } from './services/auth-guard-login.service';
import { HttpModule } from "@angular/http";
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './shared/toast/toast.component';
import { CountysComponent } from './countys/countys.component';
import { CountyService } from './services/county.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    AccountComponent,
    AdminComponent,
    CountysComponent
  ],
  imports: [
    RoutingModule,
    HttpModule,  //required
    SharedModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule 
  ],
  providers: [
    AuthService,
    AuthGuardLoginService,
    AuthGuardAdminService,
    UserService,
    CountyService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], //to needed to loaad toast
  bootstrap: [AppComponent]
})
export class AppModule { }
