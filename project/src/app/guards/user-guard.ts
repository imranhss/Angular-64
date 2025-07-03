import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

import { ChangeDetectorRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserGurd implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  canActivate(): boolean {
    if (this.authService.isUser()) {
      return true;
    } else {
      this.cdr.reattach();
      this.router.navigate(['login']);
      return false;
    }
  }

  
}
