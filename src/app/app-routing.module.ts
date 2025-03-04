import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all the components for routing
import { MainComponent } from './pages/main/main.component';
import { RollDiceComponent } from './pages/roll-dice/roll-dice.component';
import { BmiCalculatorComponent } from './pages/bmi-calculator/bmi-calculator.component';
import { SnakeGameComponent } from './pages/snake-game/snake-game.component';
import { StopwatchComponent } from './pages/stopwatch/stopwatch.component';
import { TriviaQuizComponent } from './pages/trivia-quiz/trivia-quiz.component';
import { CurrencyConverterComponent } from './pages/currency-converter/currency-converter.component';
import { TetrisComponent } from './pages/tetris/tetris.component';

const routes: Routes = [
  { path: '', component: MainComponent },  // Default route (Home)
  { path: 'roll-dice', component: RollDiceComponent },
  { path: 'bmi-calculator', component: BmiCalculatorComponent },
  { path: 'snake-game', component: SnakeGameComponent },
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'trivia-quiz', component: TriviaQuizComponent },
  { path: 'currency-converter', component: CurrencyConverterComponent },
  { path: 'tetris', component: TetrisComponent },
  { path: '**', redirectTo: '' }  // Wildcard route to handle undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
