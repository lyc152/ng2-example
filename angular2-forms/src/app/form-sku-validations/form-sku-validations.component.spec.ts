import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuValidationsComponent } from './form-sku-validations.component';

describe('FormSkuValidationsComponent', () => {
  let component: FormSkuValidationsComponent;
  let fixture: ComponentFixture<FormSkuValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
