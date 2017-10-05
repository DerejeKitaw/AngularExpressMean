import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  // call authservice to log out
  constructor(private auth: AuthService) { } //auth need to be private

  ngOnInit() {
    this.auth.logout();
  }

}
