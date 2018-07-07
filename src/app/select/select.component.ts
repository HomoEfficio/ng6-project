import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

import {coinModels, coinNames} from './data-model';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  coinNames = coinNames;
  coinModels = coinModels;

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.setupFormGroup();
  }

  ngOnInit() {

  }

  private setupFormGroup() {
    this.formGroup = this.fb.group({
      select: coinNames[2],
      ngSelect: coinModels[1].id
    });
  }
}
