import { Component } from '@angular/core';

@Component({
  selector: 'app-roll-dice',
  templateUrl: './roll-dice.component.html',
  styleUrls: ['./roll-dice.component.css']
})
export class RollDiceComponent {
  dice1: number | null = null;
  dice2: number | null = null;
  isRolling: boolean = false;

  rollDice() {
    this.isRolling = true;

    // Simulate dice rolling with random animations
    setTimeout(() => {
      this.dice1 = Math.floor(Math.random() * 6) + 1;
      this.dice2 = Math.floor(Math.random() * 6) + 1;
      this.isRolling = false;
    }, 1000); // Animation duration: 1 second
  }
}
