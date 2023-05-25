import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MostViewedStackOverflow } from '../models/most-viewed-stack-overflow.model';
import { Question } from '../models/question.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class StackOverflowService {

  constructor(private http: HttpClient) {}

  getMostViewedQuestions(): Observable<Question[]> {
    const url = environment.stackOverflowMostViewedQuestionsUrl;
  
    return this.http.get<MostViewedStackOverflow>(url)
    .pipe(
      map(response => { return response.items }),
      catchError(error => {
        console.error('Error:', error);
        return [];
      })
    );
  }
}