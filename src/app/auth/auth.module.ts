import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from './pages/Register/Register.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [RegisterComponent,LoginPageComponent,LayoutPageComponent],
  imports: [
    CommonModule,AuthRoutingModule,MaterialModule,HttpClientModule
  ],
  providers:[AuthService]

})
export class AuthModule { }
