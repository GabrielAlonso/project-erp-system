import { User } from './user';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public user: User = new User();

  public form: FormGroup;

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
    });
  }

  login() {
    const testLogin = this.authService.login(this.user);

    if (testLogin === false) {
      this.form.reset();
    }
  }
}
