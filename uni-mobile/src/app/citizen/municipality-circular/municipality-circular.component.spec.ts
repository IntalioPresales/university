import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityCircularComponent } from './municipality-circular.component';

describe('MunicipalityCircularComponent', () => {
  let component: MunicipalityCircularComponent;
  let fixture: ComponentFixture<MunicipalityCircularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalityCircularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalityCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
