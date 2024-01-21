import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  template: `
  <div class="flex flex-column">
<span class="text-lg mb-4">Login</span>
<mat-form-field>
  <mat-label>Usuario</mat-label>
  <input type="text" matInput placeholder="Nombre de Usuario">
</mat-form-field>
<mat-form-field>
  <mat-label>Constaseña</mat-label>
  <input type="password" matInput placeholder="Contraseña">
</mat-form-field>
 <button mat-button mat-flat-button color="primary" (click)="onlogin()">
 <mat-icon>expand_more</mat-icon>Ingresar
 </button>
<div class="flex justify-content-end mt-5">
<a    [routerLink]="['/auth/New_account']" > Ya tienes cuenta?</a>  
</div>

  </div>
  
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class LoginPageComponent {
  constructor(private authservice:AuthService,private router:Router){}
  onlogin():void{
this.authservice.login('juan@gmail.com','saddd').subscribe(
  user=>{
    this.router.navigate(['/']);
     console.log(user)
  }
)
  }


 }
