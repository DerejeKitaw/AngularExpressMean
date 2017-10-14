import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { InverterService } from '../services/inverter.service';
import { ToastComponent } from '../shared/toast/toast.component';
@Component({
  selector: 'app-inverters',
  templateUrl: './inverters.component.html',
  styleUrls: ['./inverters.component.scss']
})
export class InvertersComponent implements OnInit {
  inverter = {};
  inverters = [];
  isLoading = true;
  isEditing = false;

  addInverterForm: FormGroup;
  inverterName = new FormControl('', Validators.required);
  maxAcPowerOutput = new FormControl('', Validators.required);
  maxContinuousOutputCurrent = new FormControl('', Validators.required);
  maxInputVoltage = new FormControl('', Validators.required);
  cecWeightedEfficiency = new FormControl('', Validators.required);

  constructor(private inverterService: InverterService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getInverters();
    this.addInverterForm = this.formBuilder.group({
      inverterName: this.inverterName,
      maxAcPowerOutput: this.maxAcPowerOutput,
      maxContinuousOutputCurrent: this.maxContinuousOutputCurrent,
      maxInputVoltage: this.maxInputVoltage,
      cecWeightedEfficiency: this.cecWeightedEfficiency
    });
  }

  getInverters() {
    this.inverterService.getInverters().subscribe(
      data => this.inverters = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addInverter() {
    this.inverterService.addInverter(this.addInverterForm.value).subscribe(
      res => {
        const newInverter = res.json();
        this.inverters.push(newInverter);
        this.addInverterForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(inverter) {
    this.isEditing = true;
    this.inverter = inverter;
  }

  cancelEditing() {
    this.isEditing = false;
    this.inverter = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the inverters to reset the editing
    this.getInverters();
  }

  editInverter(inverter) {
    this.inverterService.editInverter(inverter).subscribe(
      res => {
        this.isEditing = false;
        this.inverter = inverter;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteInverter(inverter) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.inverterService.deleteInverter(inverter).subscribe(
        res => {
          const pos = this.inverters.map(elem => elem._id).indexOf(inverter._id);
          this.inverters.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}