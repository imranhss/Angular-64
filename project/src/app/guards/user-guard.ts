import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';

import { ChangeDetectorRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserGurd implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  // canActivate(): boolean {
  //   if (this.authService.isUser() && this.authService.isAuthenticated()) {
      
  //     return true;
  //   } else {
      
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  // }


   canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    if (this.authService.isAuthenticated() && this.authService.isUser()) {
      return true;
    }
    return this.router.createUrlTree(['/logout']);
  }

  
}
