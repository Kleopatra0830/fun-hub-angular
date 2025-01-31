# Fun Hub Application

The **Fun Hub** application is an interactive collection of mini-projects showcasing various functionalities using **Angular**. Each page provides a unique feature or game designed to engage users while demonstrating skills in Angular, TypeScript, and responsive UI design.

---

## **Features Overview**

### **Main Page**
- The main page acts as a navigation hub with links to different pages in the application.
- Pages included:
  - **Roll Dice**
  - **BMI Calculator**
  - **Snake Game**
  - **Stopwatch**
  - **Trivia Quiz**
  - **Currency Converter**

---

### **1. Roll Dice**
- **Description:** Simulates the rolling of two dice.
- **Features:**
  - Dice animations when rolling.
  - Random number generation for each die.
  - Dice visually represented with dots.

---

### **2. BMI Calculator**
- **Description:** Calculates the Body Mass Index (BMI) based on user input for height and weight.
- **Features:**
  - Input fields for height (in cm) and weight (in kg).
  - BMI calculation on button click.
  - Display of BMI result and category (e.g., underweight, normal, overweight).

---

### **3. Snake Game**
- **Description:** A classic snake game where the player controls the snake to eat food and grow.
- **Features:**
  - Arrow key controls for snake movement.
  - Collision detection (walls or self).
  - Score tracking based on food eaten.
  - A **History Board** showing past scores and the top score.
  - Introduction on how to play the game.
  - Restart functionality to play again.

---

### **4. Stopwatch**
- **Description:** A simple stopwatch to track elapsed time.
- **Features:**
  - Start, pause, and reset functionality.
  - Display of time in minutes and seconds.
  - Responsive buttons for control.

---

### **5. Trivia Quiz**
- **Description:** A multiple-choice quiz game powered by the Open Trivia Database.
- **Features:**
  - Category and difficulty selection.
  - Fetches random questions from the API.
  - Multiple-choice options with color-coded feedback:
    - **Green** for correct answers.
    - **Red** for incorrect answers.
  - Review mode to display selected and correct answers after the quiz.
  - Restart functionality to take a new quiz with different questions.

---

### **6. Currency Converter**
- **Description:** A currency conversion tool that converts between different currencies.
- **Features:**
  - Input fields for amount, source currency, and target currency.
  - Live currency conversion rates fetched from an external API.
  - Real-time result display after conversion.

---

## **Project Setup**

### **Prerequisites**
- Node.js installed on your system.
- Angular CLI installed globally:
  ```sh
  npm install -g @angular/cli
  ```

### **Installation**
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```sh
   cd fun-hub-angular
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the Angular development server:
   ```sh
   ng serve
   ```

5. Open the application in your browser at `http://localhost:4200/`.

---

## **Code Structure**

### **Project Components**
Each page has a corresponding Angular component for functionality and UI. Here's a breakdown of key components:

- **MainPageComponent:** The landing page with links to all other pages.
- **RollDiceComponent:** Handles dice rolling logic and animations.
- **BmiCalculatorComponent:** Handles BMI calculation based on user input.
- **SnakeGameComponent:** Implements the snake game, including movement, collisions, and scoring.
- **StopwatchComponent:** Implements the stopwatch with start, pause, and reset functionality.
- **TriviaQuizComponent:** Handles quiz logic, question fetching, answer selection, and review mode.
- **CurrencyConverterComponent:** Handles currency conversion logic and API integration.

---

## **Screenshots**

1. **Main Page:**
   ![Main Page](screenshots/main-page.png)

2. **Roll Dice Page:**
   ![Roll Dice](screenshots/roll-dice.png)

3. **BMI Calculator Page:**
   ![BMI Calculator](screenshots/bmi-calculator.png)

4. **Snake Game Page:**
   ![Snake Game](screenshots/snake-game.png)

5. **Trivia Quiz Page:**
   ![Trivia Quiz](screenshots/trivia-quiz.png)

6. **Stopwatch Page:**
   ![Stopwatch](screenshots/stopwatch.png)

7. **Currency Converter Page:**
   ![Currency Converter](screenshots/currency-converter.png)

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

