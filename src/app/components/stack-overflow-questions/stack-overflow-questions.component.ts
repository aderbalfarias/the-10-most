import { Component } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { StackOverflowService } from 'src/app/services/stack-overflow.service';

@Component({
  selector: 'app-stack-overflow-questions',
  templateUrl: './stack-overflow-questions.component.html',
  styleUrls: ['./stack-overflow-questions.component.css'],
  providers: [StackOverflowService]
})
export class StackOverflowQuestionsComponent {
  questions: Question[] = [];

  constructor(private stackOverflowService: StackOverflowService) { }

  ngOnInit() {
    this.getMostViewedQuestions();
  }

  getMostViewedQuestions(): void {
    this.stackOverflowService.getMostViewedQuestions()
      .subscribe(response => this.questions = response);
  }
}
