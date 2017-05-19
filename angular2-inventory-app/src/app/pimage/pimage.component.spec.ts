import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PimageComponent } from './pimage.component';

describe('PimageComponent', () => {
  let component: PimageComponent;
  let fixture: ComponentFixture<PimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
