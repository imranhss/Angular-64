import { Component, OnInit } from '@angular/core';
import { UserModule } from './model/user-module';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'project';

  userRole: string | null = '';
  currentUser: UserModule | null = null;

  constructor(
    private authService: AuthService,
  ){}


  ngOnInit(): void {
     this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.userRole = user?.role || null;
    });
  }



}
