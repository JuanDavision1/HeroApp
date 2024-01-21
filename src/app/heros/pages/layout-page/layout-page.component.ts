import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/Interfaces/user';

@Component({
  selector: 'app-layout-page',
 
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})

export class LayoutPageComponent {
 
  constructor(private serviceauth:AuthService,private router:Router){}
public sideberItems=[
  {label:'Listado',icon:'../../../../assets/lista.png',url:'./List'},
  {label:'Añadir',icon:'../../../../assets/agregar.png',url:'./new_hero'},
  {label:'Buscar',icon:'../../../../assets/busqueda.png',url:'./Search'}
  
]
get user():User | undefined{
  return this.serviceauth.currentUser;
  }
onlogot(){
this.serviceauth.logout();
this.router.navigate(['/auth/login'])
}

}
