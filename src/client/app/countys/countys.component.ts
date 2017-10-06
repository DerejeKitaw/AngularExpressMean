import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CountyService } from '../services/county.service';
import { ToastComponent } from '../shared/toast/toast.component';
@Component({
  selector: 'app-countys',
  templateUrl: './countys.component.html',
  styleUrls: ['./countys.component.scss']
})
export class CountysComponent implements OnInit {
  county = {};
  countys = [];
  isLoading = true;
  isEditing = false;

  addCountyForm: FormGroup;
  countyName = new FormControl('', Validators.required);
  groundSnowLoad = new FormControl('', Validators.required);
  rapidShutdown = new FormControl('', Validators.required);
  windSpeed = new FormControl('', Validators.required);

  constructor(private countyService: CountyService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getCountys();
    this.addCountyForm = this.formBuilder.group({
      countyName: this.countyName,
      groundSnowLoad: this.groundSnowLoad,
      rapidShutdown: this.rapidShutdown,
      windSpeed: this.windSpeed
    });
  }

  getCountys() {
    this.countyService.getCountys().subscribe(
      data => this.countys = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addCounty() {
    this.countyService.addCounty(this.addCountyForm.value).subscribe(
      res => {
        const newCounty = res.json();
        this.countys.push(newCounty);
        this.addCountyForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(county) {
    this.isEditing = true;
    this.county = county;
  }

  cancelEditing() {
    this.isEditing = false;
    this.county = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the countys to reset the editing
    this.getCountys();
  }

  editCounty(county) {
    this.countyService.editCounty(county).subscribe(
      res => {
        this.isEditing = false;
        this.county = county;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteCounty(county) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.countyService.deleteCounty(county).subscribe(
        res => {
          const pos = this.countys.map(elem => elem._id).indexOf(county._id);
          this.countys.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}