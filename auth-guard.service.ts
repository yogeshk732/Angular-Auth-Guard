import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'COOKIE SERVICE';  // import cookie service to check the token

@Injectable({
  providedIn: 'root'
})


export class AuthGuardService {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}
