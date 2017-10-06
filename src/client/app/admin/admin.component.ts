import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users = [];
  isLoading = true;

  constructor(public auth: AuthService,
              public toast: ToastComponent,
              private userService: UserService) { }
  
  ngOnInit() {
    this.toast.setMessage('Admin','success');
    // get all users loged in befor the component load
    this.getUsers();
  }
  
  getUsers() {
    this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  deleteUser(user) {
    this.userService.deleteUser(user).subscribe(
      data => this.toast.setMessage('user deleted successfully.', 'success'),
      error => console.log(error),
      () => this.getUsers()
    );
  }
}
