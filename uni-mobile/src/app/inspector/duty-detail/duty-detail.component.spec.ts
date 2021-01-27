import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyDetailComponent } from './duty-detail.component';

describe('DutyDetailComponent', () => {
  let component: DutyDetailComponent;
  let fixture: ComponentFixture<DutyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
