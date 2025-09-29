import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable,tap} from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUser: any;
  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) this.currentUser = JSON.parse(savedUser);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post('/api/authenticate', credentials).pipe(
      tap(user => {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }

  get presentUser() {
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
     return this.currentUser != null;
  }

  isAdmin(): boolean {
    return this.currentUser?.admin === true;
  }
}
