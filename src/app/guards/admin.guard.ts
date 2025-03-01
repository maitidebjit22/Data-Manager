import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Check if user is authenticated (e.g., by checking if there's a valid token)
    const isAuthenticated = localStorage.getItem('isAdmin') === 'true'; // Simple check using localStorage

    if (isAuthenticated) {
      return true;
    }

    // Redirect to login page if not authenticated
    this.router.navigate(['/admin']);
    return false;
  }
}

