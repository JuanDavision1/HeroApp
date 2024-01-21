import { Injectable } from '@angular/core';
import { enviroments } from '../../../enviroments/enviroments';
import { User } from '../Interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable, tap,of, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl = enviroments.baseUrl;
private user?:User;
  constructor(private http:HttpClient) {}
get currentUser():User | undefined{
if(!this.user) return undefined;
return structuredClone(this.user);
}
login(email:string, password:string):Observable<User>{
 return this.http.get<User>(`${this.baseUrl}/users/1`)
.pipe(

  tap(user=>{this.user = user;}),
  tap(user=>{localStorage.setItem('Token','kksdfnlskdfns');})
)
}
checkauthStatus():Observable<boolean>{
if(!localStorage.getItem('Token')) return of(false);
const token = localStorage.getItem('Token');
return this.http.get<User>(`${this.baseUrl}/users/1`)
.pipe(
  tap(user=>this.user = user),
  map(user=> !!user),
  catchError(err=> of(false))
)


}

logout(){
  this.user=undefined;
  localStorage.clear();
}
}
