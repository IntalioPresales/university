import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyDutiesPage } from './my-duties.page';

describe('MyDutiesPage', () => {
  let component: MyDutiesPage;
  let fixture: ComponentFixture<MyDutiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDutiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyDutiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
