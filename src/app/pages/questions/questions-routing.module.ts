import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { ViewAnswersComponent } from './view-answers/view-answers.component';

const routes: Routes = [
  { path: 'builder', component: ListQuestionsComponent },
  { path: 'answers', component: ViewAnswersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
