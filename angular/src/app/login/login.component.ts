import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login().subscribe(success => {
      if (success) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
