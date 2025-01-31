import { Component } from '@angular/core';

@Component({
  selector: 'app-roll-dice',
  templateUrl: './roll-dice.component.html',
  styleUrls: ['./roll-dice.component.css']
})
export class RollDiceComponent {
  dice1: number | null = null;
  dice2: number | null = null;

  rollDice() {
    this.dice1 = Math.floor(Math.random() * 6) + 1;
    this.dice2 = Math.floor(Math.random() * 6) + 1;
  }
}
