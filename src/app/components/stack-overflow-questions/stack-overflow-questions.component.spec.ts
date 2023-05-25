import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackOverflowQuestionsComponent } from './stack-overflow-questions.component';

describe('StackOverflowQuestionsComponent', () => {
  let component: StackOverflowQuestionsComponent;
  let fixture: ComponentFixture<StackOverflowQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StackOverflowQuestionsComponent]
    });
    fixture = TestBed.createComponent(StackOverflowQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
