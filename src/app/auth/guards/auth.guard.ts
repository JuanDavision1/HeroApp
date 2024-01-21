import { Injectable, inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Route, UrlSegment, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { truncate } from 'fs';

@Injectable({providedIn: 'root'})
export class AuthGuard{
    constructor( private authservice:AuthService,private router:Router) { }
 
}

const  checkauthstatus =(): Observable<boolean> =>{
    const authservice:AuthService = inject(AuthService);
    const router:Router = inject(Router);
    return authservice.checkauthStatus()
    .pipe(
        tap(isAutheticathed => {
            if(!isAutheticathed) router.navigate(['./auth/login'])
        })
    )
}
export const canActivateGuard: CanActivateFn = ( //Hay que tener en cuenta el tipado CanActiveFn
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('CanActivate');
  console.log({ route, state });
 
  return true;
};
 
export const canMatchGuard: CanMatchFn = ( //Tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
) => {
  console.log('CanMatch');
  console.log({ route, segments });
 
  return true;
};
