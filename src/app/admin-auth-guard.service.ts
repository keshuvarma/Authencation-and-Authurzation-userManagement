import { Injectable } from '@angular/core';
import { AuthGuard } from './auth-gaurd.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard extends AuthGuard {

override canActivate() {
    let isAuthenticated = super.canActivate();
    if (!isAuthenticated)
      return false; 
    if (this.authService.isAdmin())
    {
     return true; 
    }
    else{
    this.router.navigate(['/no-access']);
    return false;
    }
  }
}
