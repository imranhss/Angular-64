import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { UserModule } from '../model/user-module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl: string = "http://localhost:3000/user";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }


  getUserProfile(): Observable<UserModule | null> {
    return of(this.authService.getUserProfileFromStorage());
  }


    updateUserProfile(user: UserModule): Observable<UserModule> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<UserModule>(`${this.baseUrl}/${user.id}`, user);
  }
  

}
