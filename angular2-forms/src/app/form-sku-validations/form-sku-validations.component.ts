import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sku-validations',
  templateUrl: './form-sku-validations.component.html',
  styleUrls: ['./form-sku-validations.component.css']
})
export class FormSkuValidationsComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
