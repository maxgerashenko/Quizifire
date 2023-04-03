import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './quiz-page.component';
import { PipesModule } from '../pipes/pipes.module';
import { QuestionComponent, } from './question.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [CommonModule,
    PipesModule,
    MatListModule,
    ],
  declarations: [QuizPageComponent, QuestionComponent],
  exports: [QuestionComponent],
})
export class QuizModule {}