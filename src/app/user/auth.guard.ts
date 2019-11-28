import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { loggedIn } from '@angular/fire/auth-guard';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SnackService } from '../services/snack.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private snack: SnackService) {}

  redirectToProfileEditOrLogin = () =>
    map(user => (user ? ['kanban'] : this.snack.authError()));

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const user = this.afAuth.authState;
    return loggedIn(user).pipe(
      map(u => !!u),
      tap(logged => {
        if (!logged) {
          console.log('access denied');
          this.snack.authError();
        }
      })
    );
  }
}
