import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
   });
  }

  ngOnInit(): void {
  }

}
