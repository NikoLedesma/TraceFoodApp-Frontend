import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsDayComponent } from './meals-day.component';

describe('MealsDayComponent', () => {
  let component: MealsDayComponent;
  let fixture: ComponentFixture<MealsDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
