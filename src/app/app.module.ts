import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Component Imports
import { MainComponent } from './pages/main/main.component';
import { RollDiceComponent } from './pages/roll-dice/roll-dice.component';
import { BmiCalculatorComponent } from './pages/bmi-calculator/bmi-calculator.component';
import { SnakeGameComponent } from './pages/snake-game/snake-game.component';
import { StopwatchComponent } from './pages/stopwatch/stopwatch.component';
import { TriviaQuizComponent } from './pages/trivia-quiz/trivia-quiz.component';
import { CurrencyConverterComponent } from './pages/currency-converter/currency-converter.component';
import { TetrisComponent } from './pages/tetris/tetris.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RollDiceComponent,
    BmiCalculatorComponent,
    SnakeGameComponent,
    StopwatchComponent,
    TriviaQuizComponent,
    CurrencyConverterComponent,
    TetrisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
