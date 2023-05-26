import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StackOverflowQuestionsComponent } from './components/stack-overflow-questions/stack-overflow-questions.component';
import { HttpClientModule } from '@angular/common/http';
import { MillionPipe } from 'src/shared/million.pipe';
import { DecimalPipe } from '@angular/common';
import { UnescapePipe } from 'src/shared/unescape.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StackOverflowQuestionsComponent,
    MillionPipe,
    UnescapePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
