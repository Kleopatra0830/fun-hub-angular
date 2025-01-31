import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollDiceComponent } from './roll-dice.component';

describe('RollDiceComponent', () => {
  let component: RollDiceComponent;
  let fixture: ComponentFixture<RollDiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RollDiceComponent]
    });
    fixture = TestBed.createComponent(RollDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
