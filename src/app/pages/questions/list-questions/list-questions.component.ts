import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListQuestion, QuestionType } from '@constants/constant';
import { IQuestion } from '@interfaces/question.interface';
import { QuestionService } from '@services/question/question.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss']
})
export class ListQuestionsComponent implements OnInit {

  listOfData: IQuestion[] = JSON.parse(localStorage.getItem(ListQuestion) || '[]');
  loading = false;
  isOpen = false;
  dataChanged = new Subject();
  isCheckedButton = true

  constructor(
    private _questionService: QuestionService,
    private _router: Router
  ) {
    this.dataChanged.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe((data: any) => {
        this.listOfData[data?.i].answer = data?.value
        localStorage.setItem(ListQuestion, JSON.stringify(this.listOfData))
      });
  }

  ngOnInit(): void {
    this.getListQuestions()
  }

  getListQuestions() {
    this._questionService.listQuestions.subscribe(data => {
      this.listOfData = data
    })
  }

  openProductForm(): void {
    this._questionService.isOpen.next(true);
  }

  viewReviewAnswer() {
    setTimeout(() => {
      this._router.navigate(['/form/answers'])
    }, 500);
  }

  handlerChange(e: any, i: number, y?: number): void {
    if (this.listOfData[i].type === QuestionType.checkbox) {
      const {checked} = e.target;
      this.listOfData[i].answer[Number(y)].selected = checked
    localStorage.setItem(ListQuestion, JSON.stringify(this.listOfData))
    } else {
      const { value} = e.target;
      this.dataChanged.next({i, value})
    }
  }
}
