import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDutiesComponent } from './my-duties.component';

describe('MyDutiesComponent', () => {
  let component: MyDutiesComponent;
  let fixture: ComponentFixture<MyDutiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
