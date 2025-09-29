import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

  constructor(public  router: Router,public authService: AuthService) { }
logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}

admin()
{
  this.router.navigate(['/admin']);
}

}
