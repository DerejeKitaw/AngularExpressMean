import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { PanelService } from '../services/panel.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {
  panel = {};
  panels = [];
  isLoading = true;
  isEditing = false;

  addPanelForm: FormGroup;
  panelName = new FormControl('', Validators.required);
  powerRating = new FormControl('', Validators.required);
  Imp = new FormControl('', Validators.required);
  Vmp = new FormControl('', Validators.required);
  Isc = new FormControl('', Validators.required);
  Voc = new FormControl('', Validators.required);
  tempCoefficientofIsc = new FormControl('', Validators.required);
  tempCoefficientofVoc = new FormControl('', Validators.required);
  TempCoefficientofPower = new FormControl('', Validators.required);
  maximumSytemVoltage = new FormControl('', Validators.required);
  length = new FormControl('', Validators.required);
  width = new FormControl('', Validators.required);
  depth = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  constructor(private panelService: PanelService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getPanels();
    this.addPanelForm = this.formBuilder.group({
      panelName: this.panelName,
      powerRating: this.powerRating,
      Imp: this.Imp,
      Vmp: this.Vmp,
      Isc: this.Isc,
      Voc: this.Voc,
      tempCoefficientofIsc: this.tempCoefficientofIsc,
      tempCoefficientofVoc: this.tempCoefficientofVoc,
      TempCoefficientofPower: this.TempCoefficientofPower,
      maximumSytemVoltage: this.maximumSytemVoltage,
      length: this.length,
      width: this.width,
      depth: this.depth,
      weight: this.weight
    });
  }

  getPanels() {
    this.panelService.getPanels().subscribe(
      data => this.panels = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addPanel() {
    this.panelService.addPanel(this.addPanelForm.value).subscribe(
      res => {
        const newPanel = res.json();
        this.panels.push(newPanel);
        this.addPanelForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(panel) {
    this.isEditing = true;
    this.panel = panel;
  }

  cancelEditing() {
    this.isEditing = false;
    this.panel = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the panels to reset the editing
    this.getPanels();
  }

  editPanel(panel) {
    this.panelService.editPanel(panel).subscribe(
      res => {
        this.isEditing = false;
        this.panel = panel;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deletePanel(panel) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.panelService.deletePanel(panel).subscribe(
        res => {
          const pos = this.panels.map(elem => elem._id).indexOf(panel._id);
          this.panels.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
