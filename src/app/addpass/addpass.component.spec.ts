import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpassComponent } from './addpass.component';

describe('AddpassComponent', () => {
  let component: AddpassComponent;
  let fixture: ComponentFixture<AddpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
