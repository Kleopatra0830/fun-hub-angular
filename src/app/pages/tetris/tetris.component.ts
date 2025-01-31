import { Component, HostListener, OnInit } from '@angular/core';

interface Position {
  x: number;
  y: number;
}

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.css']
})
export class TetrisComponent implements OnInit {
  grid: boolean[] = [];
  score: number = 0;
  animationFrame: any;
  lastDropTime: number = 0;
  dropInterval: number = 500;

  currentTetromino: Position[] = [];
  position: Position = { x: 4, y: 0 };
  shapes: Position[][] = [
    // I shape
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
    // Square shape
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
    // T shape
    [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }]
  ];

  ngOnInit() {
    this.initializeGrid();
  }

  initializeGrid() {
    this.grid = Array(20 * 10).fill(false);  // 20 rows, 10 columns
  }
  

  startGame() {
    this.resetGame();
    this.spawnTetromino();
    this.gameLoop();
  }

  resetGame() {
    cancelAnimationFrame(this.animationFrame);
    this.initializeGrid();
    this.score = 0;
  }

  spawnTetromino() {
    const randomIndex = Math.floor(Math.random() * this.shapes.length);
    this.currentTetromino = this.shapes[randomIndex];
    this.position = { x: 4, y: 0 };
  }

  gameLoop(timestamp: number = 0) {
    if (!this.lastDropTime) this.lastDropTime = timestamp;  // Initialize drop time
    const deltaTime = timestamp - this.lastDropTime;
  
    if (deltaTime > this.dropInterval) {
      this.moveTetromino(0, 1);  // Move the tetromino down
      this.lastDropTime = timestamp;  // Reset drop time
    }
  
    this.redrawGrid();
    requestAnimationFrame(this.gameLoop.bind(this));
  }
  

  redrawGrid() {
    const tempGrid = Array(200).fill(false);  // Reset temp grid
  
    // Draw current tetromino on the grid
    this.currentTetromino.forEach(block => {
      const x = block.x + this.position.x;
      const y = block.y + this.position.y;
      if (y >= 0 && y < 20 && x >= 0 && x < 10) {
        tempGrid[y * 10 + x] = true;
      }
    });
  
    // Merge locked cells with active tetromino
    this.grid = this.grid.map((cell, index) => cell || tempGrid[index]);
  }
  

  moveTetromino(dx: number, dy: number) {
    const newPosition = { x: this.position.x + dx, y: this.position.y + dy };

    if (this.canMove(newPosition)) {
      this.position = newPosition;
    } else if (dy > 0) {
      this.lockTetromino();
      this.spawnTetromino();
    }
  }

  canMove(newPosition: Position, shape: Position[] = this.currentTetromino): boolean {
    return shape.every(block => {
      const x = block.x + newPosition.x;
      const y = block.y + newPosition.y;
      return x >= 0 && x < 10 && y < 20 && (y < 0 || !this.grid[y * 10 + x]);
    });
  }

  lockTetromino() {
    this.currentTetromino.forEach(block => {
      const x = block.x + this.position.x;
      const y = block.y + this.position.y;
      if (y >= 0) this.grid[y * 10 + x] = true;
    });
    this.clearLines();
  }

  clearLines() {
    for (let row = 19; row >= 0; row--) {
      if (this.grid.slice(row * 10, row * 10 + 10).every(cell => cell)) {
        this.grid.splice(row * 10, 10);
        this.grid.unshift(...Array(10).fill(false));
        this.score += 100;
      }
    }
  }

  rotateTetromino() {
    const rotatedTetromino = this.currentTetromino.map(block => ({
      x: -block.y,
      y: block.x
    }));

    if (this.canMove(this.position, rotatedTetromino)) {
      this.currentTetromino = rotatedTetromino;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.moveTetromino(-1, 0);
        break;
      case 'ArrowRight':
        this.moveTetromino(1, 0);
        break;
      case 'ArrowDown':
        this.dropInterval = 100;
        break;
      case ' ':
        this.hardDrop();
        break;
      case 'ArrowUp':
        this.rotateTetromino();
        break;
    }
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.dropInterval = 500;
    }
  }

  hardDrop() {
    while (this.canMove({ x: this.position.x, y: this.position.y + 1 })) {
      this.position.y++;
    }
    this.lockTetromino();
    this.spawnTetromino();
  }
}
