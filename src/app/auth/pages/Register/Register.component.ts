import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
  
  <div  id="main_box_register"class="flex flex-column">
<span class="text-lg mb-4">Register</span>
<mat-form-field>
  <mat-label>Usuario</mat-label>
  <input type="text" matInput placeholder="Nombre de Usuario">
</mat-form-field>
<mat-form-field>
  <mat-label>Nombre</mat-label>
  <input type="password" matInput placeholder="Contraseña">
</mat-form-field>
<mat-form-field>
  <mat-label>Constaseña</mat-label>
  <input type="password" matInput placeholder="Contraseña">
</mat-form-field>

 <button mat-button mat-flat-button >
 <mat-icon>expand_more</mat-icon>Crear cuenta
 </button>
<div class="flex justify-content-end mt-5">
<a    [routerLink]="['/auth/login']" >No tienes cuenta?</a>  
</div>

  </div>
  
  `,
  styles: `
 #main_box_register{
  background-color:black;
 }
  button{
    /* From https://css.glass */
background: rgba(255, 255, 255, 0.33);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.1px);
-webkit-backdrop-filter: blur(5.1px);
border: 1px solid rgba(255, 255, 255, 0.3);
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent { }
