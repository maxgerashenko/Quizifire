import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../services/interfaces';
import { MenuService } from '../services/menu.service';
import { SourceService } from '../services/source.service';
import { ObjectType, assertExists } from '../utils';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizPageComponent implements OnInit {
  quiz: Quiz;
  answers: string[] = [];
  currentQuestionIndex = 0;
  selectedOptionValue: string|null = null;
  isAutoReply = true;

  constructor(
    private readonly sourceService: SourceService,
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {
    let courseId = assertExists(this.route.snapshot.queryParams['courseId'], 'courseId is not set');
    let quizId = assertExists(this.route.snapshot.queryParams['quizId'], 'quizId is not set');
    this.quiz = assertExists(this.sourceService.getQuiz(courseId, quizId), 'quiz is not set');
    this.shuffleQuestions();
    this.menuService.closeMenu();
  }

  ngOnInit(): void {}

  private shuffleQuestions(): void {
    for (let i = this.quiz.questionsList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.quiz.questionsList[i], this.quiz.questionsList[j]] = [
        this.quiz.questionsList[j],
        this.quiz.questionsList[i],
      ];
    }
  }

  toogleAutoReply(value: boolean) {
    this.isAutoReply = value;
  }

  selectOption({ value }:ObjectType<string>): void {
    this.answers[this.currentQuestionIndex] = value;
    this.selectedOptionValue = value;
    if (this.isAutoReply) this.submitAnswer();
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedOptionValue = null;
    this.shuffleQuestions();
  }
  goToList() {
    this.router.navigate(['/course'], {
      queryParams: { id: this.quiz.courseId },
    });
  }

  submitAnswer(): void {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === this.quiz.questionsList.length) {
      this.sourceService.setResult({
        quiz: this.quiz,
        answers: this.answers,
      });
      this.router.navigate(['/results']);
    }
  }
}
