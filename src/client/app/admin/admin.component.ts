import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isLoading=true;
  constructor(
    public toast:ToastComponent
  ) { }

  ngOnInit() {
    this.toast.setMessage('Admin','success')
  }

}
