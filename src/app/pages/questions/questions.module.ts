import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopConfirmComponent } from '@components/pop-confirm/pop-confirm.component';
import { QuestionsRoutingModule } from './questions-routing.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';

import { AnswerFormComponent } from '@components/answer-form/answer-form.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { ViewAnswersComponent } from './view-answers/view-answers.component';

@NgModule({
  declarations: [
    PopConfirmComponent,
    AnswerFormComponent,
    ListQuestionsComponent,
    ListQuestionsComponent,
    ViewAnswersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    QuestionsRoutingModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzDrawerModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
    NzSelectModule,
    NzCheckboxModule,
    NzCardModule
  ],
})
export class QuestionsModule { }
