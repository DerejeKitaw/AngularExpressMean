import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingComponent, ToastComponent]
  ,
  providers: [
    ToastComponent
  ]
})
export class SharedModule { }
