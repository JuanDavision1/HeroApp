import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { enviroments } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private baseUrl: string = enviroments.baseUrl;
  constructor(private http: HttpClient) {}
  getheros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }
  getheroId(id: string): Observable<Hero | undefined> {
    return this.http
      .get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
  getsuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q${query}&_limit=6`);
  }
  addhero(hero:Hero):Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes`,hero);
  }
  updatehero(hero:Hero):Observable<Hero>{
    if(!hero.id) throw Error('Hero Id is Required');
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`,hero);
  }
  deleteHerobyid(id:string):Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      map( resp=>true),
      catchError(err=> of(false)),
 
    )
  }
}
