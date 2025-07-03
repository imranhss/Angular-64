import { Component } from '@angular/core';
import { UserModule } from '../../model/user-module';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-userprofile',
  standalone: false,
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css'
})
export class Userprofile {


   user: UserModule | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService, // ✅ fixed spelling
    private router: Router,
    private userSer: UserService
  ) { }

  ngOnInit(): void {
   this.loadUserProfile();
  }

  loadUserProfile(): void {
    const sub = this.userSer.getUserProfile().subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.user = res;
        }
      },
      error: (err) => {
        console.error('Error loading user profile:', err);
      }
    });

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
