import { Injectable } from '@angular/core';
import { ListQuestion } from '@constants/constant';
import { IQuestion } from '@interfaces/question.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  isOpen = new Subject<boolean>();
  listQuestions = new Subject<IQuestion[]>()

  constructor() { }

  addNewQuestion(question: IQuestion) {
    const listQuestions = localStorage.getItem(ListQuestion)
    if (listQuestions) {
      const newQuestions = [...JSON.parse(listQuestions), question]
      localStorage.setItem(ListQuestion, JSON.stringify(newQuestions))
      this.listQuestions.next(newQuestions)
    } else {
      localStorage.setItem(ListQuestion, JSON.stringify([question]))
      this.listQuestions.next([question])
    }
  }

}
