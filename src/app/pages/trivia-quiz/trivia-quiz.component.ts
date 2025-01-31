import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  options: string[];
  selectedAnswer?: string;
}

@Component({
  selector: 'app-trivia-quiz',
  templateUrl: './trivia-quiz.component.html',
  styleUrls: ['./trivia-quiz.component.css']
})
export class TriviaQuizComponent implements OnInit {
  categories: { id: number; name: string }[] = [];
  selectedCategory: number = 9;
  difficultyLevels: string[] = ['easy', 'medium', 'hard'];
  selectedDifficulty: string = 'medium';

  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  quizCompleted: boolean = false;
  quizStarted: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.http.get<any>('https://opentdb.com/api_category.php').subscribe(response => {
      this.categories = response.trivia_categories;
    });
  }

  startQuiz() {
    this.http.get<any>(`https://opentdb.com/api.php?amount=5&category=${this.selectedCategory}&difficulty=${this.selectedDifficulty}&type=multiple`).subscribe(response => {
      this.questions = response.results.map((q: any) => ({
        question: this.decodeHtml(q.question),
        correct_answer: this.decodeHtml(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map((ans: string) => this.decodeHtml(ans)),
        options: this.shuffleOptions([...q.incorrect_answers.map((ans: string) => this.decodeHtml(ans)), this.decodeHtml(q.correct_answer)])
      }));
      this.quizStarted = true;
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.quizCompleted = false;
    });
  }

  shuffleOptions(options: string[]): string[] {
    return options.sort(() => Math.random() - 0.5);
  }

  selectAnswer(answer: string) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    currentQuestion.selectedAnswer = answer;

    if (answer === currentQuestion.correct_answer) {
      this.score += 10;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      setTimeout(() => this.currentQuestionIndex++, 1000);
    } else {
      this.quizCompleted = true;
    }
  }

  decodeHtml(html: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  restartQuiz() {
    this.questions = [];
    this.quizStarted = false;
    this.quizCompleted = false;
  }
}
