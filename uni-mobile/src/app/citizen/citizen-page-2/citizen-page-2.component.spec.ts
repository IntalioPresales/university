/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitizenPage-2Component } from './citizen-page-2.component';

describe('CitizenPage-2Component', () => {
  let component: CitizenPage-2Component;
  let fixture: ComponentFixture<CitizenPage-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenPage-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenPage-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
