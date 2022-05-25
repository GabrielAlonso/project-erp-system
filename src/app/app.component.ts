import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public login: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      (showMenu) => (this.login = showMenu)
    );
  }
}
