import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCupComponent } from './checkbox-cup.component';

describe('CheckboxCupComponent', () => {
  let component: CheckboxCupComponent;
  let fixture: ComponentFixture<CheckboxCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
