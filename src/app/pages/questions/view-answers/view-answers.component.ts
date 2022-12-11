import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListQuestion } from '@constants/constant';
import { IQuestion } from '@interfaces/question.interface';
import { QuestionService } from '@services/question/question.service';

@Component({
  selector: 'app-view-answers',
  templateUrl: './view-answers.component.html',
  styleUrls: ['./view-answers.component.scss']
})
export class ViewAnswersComponent implements OnInit {
  listOfData: IQuestion[] =  JSON.parse(localStorage.getItem(ListQuestion) || '[]');
  constructor(
    private _questionService: QuestionService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getListQuestions()
  }

  getListQuestions() {
    this._questionService.listQuestions.subscribe(data => {
      this.listOfData = data
    })
  }

  backToForm() {
    this._router.navigate(['/form/builder'])
  }

}
