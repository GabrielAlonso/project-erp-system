import { User } from './user';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userAuthed: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  login(user: User): boolean {
    if (user.login === 'login' && user.password === '123') {
      this.userAuthed = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/dashboard']);
      return true;
    } else {
      this.showMenuEmitter.emit(false);
      this.userAuthed = false;

      this._snackBar.open('Login or Password is wrong!', 'Close', {
        duration: 2500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

      return false;
    }
  }

  userIsAuthed() {
    return this.userAuthed;
  }
}
