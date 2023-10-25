import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetScreenComponent } from './budget-screen.component';

describe('BudgetScreenComponent', () => {
  let component: BudgetScreenComponent;
  let fixture: ComponentFixture<BudgetScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetScreenComponent]
    });
    fixture = TestBed.createComponent(BudgetScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
