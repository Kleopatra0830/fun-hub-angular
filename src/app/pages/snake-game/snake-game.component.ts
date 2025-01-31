import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent {
  gridSize: number = 20;
  snake: { x: number; y: number }[] = [{ x: 10, y: 10 }];
  direction: string = 'RIGHT';
  food: { x: number; y: number } = this.generateRandomPosition();
  gameInterval: any;
  isGameOver: boolean = false;
  score: number = 0;
  topScore: number = 0;
  scoreHistory: number[] = [];

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.isGameOver = false;
    this.direction = 'RIGHT';
    this.snake = [{ x: 10, y: 10 }];
    this.food = this.generateRandomPosition();
    this.score = 0;

    this.gameInterval = setInterval(() => {
      if (!this.isGameOver) {
        this.moveSnake();
      }
    }, 200);
  }

  restartGame() {
    // Save the score to history
    this.scoreHistory.push(this.score);

    // Update top score if the current score is higher
    if (this.score > this.topScore) {
      this.topScore = this.score;
    }

    // Restart the game
    clearInterval(this.gameInterval);
    this.startGame();
  }

  generateRandomPosition(): { x: number; y: number } {
    return {
      x: Math.floor(Math.random() * this.gridSize),
      y: Math.floor(Math.random() * this.gridSize)
    };
  }

  moveSnake() {
    const head = { ...this.snake[0] };

    switch (this.direction) {
      case 'UP': head.y -= 1; break;
      case 'DOWN': head.y += 1; break;
      case 'LEFT': head.x -= 1; break;
      case 'RIGHT': head.x += 1; break;
    }

    if (this.checkCollision(head)) {
      this.endGame();
      return;
    }

    this.snake.unshift(head);

    if (head.x === this.food.x && head.y === this.food.y) {
      this.food = this.generateRandomPosition();
      this.score += 10;
    } else {
      this.snake.pop();
    }
  }

  checkCollision(position: { x: number; y: number }): boolean {
    if (position.x < 0 || position.x >= this.gridSize || position.y < 0 || position.y >= this.gridSize) {
      return true;
    }

    return this.snake.some(segment => segment.x === position.x && segment.y === position.y);
  }

  endGame() {
    this.isGameOver = true;
    clearInterval(this.gameInterval);
    alert(`Game Over! Your score: ${this.score}`);
  }

  @HostListener('window:keydown', ['$event'])
  changeDirection(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp': if (this.direction !== 'DOWN') this.direction = 'UP'; break;
      case 'ArrowDown': if (this.direction !== 'UP') this.direction = 'DOWN'; break;
      case 'ArrowLeft': if (this.direction !== 'RIGHT') this.direction = 'LEFT'; break;
      case 'ArrowRight': if (this.direction !== 'LEFT') this.direction = 'RIGHT'; break;
    }
  }

  isSnakeSegment(x: number, y: number): boolean {
    return this.snake.some(segment => segment.x === x && segment.y === y);
  }
}
