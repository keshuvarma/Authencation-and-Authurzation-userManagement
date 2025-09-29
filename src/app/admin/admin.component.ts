import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {

  constructor(public router: Router, public authService: AuthService){
  }
  
  back(){
    this.router.navigate(['/home']);
  }
  logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}
