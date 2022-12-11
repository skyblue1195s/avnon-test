import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionType } from '@constants/constant';
import { IAnswer } from '@interfaces/question.interface';
import { QuestionService } from '@services/question/question.service';
import { distinctUntilChanged, Subject } from 'rxjs';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss'],
})
export class AnswerFormComponent implements OnInit {
  visible = false;
  validateForm: FormGroup;
  loading = false;
  title = 'Add Question';
  answers: IAnswer[] = [];
  dataChanged = new Subject();

  constructor(
    private _questionService: QuestionService,
    private _fb: FormBuilder
  ) {
    this.validateForm = this._fb.group({
      type: [QuestionType.paragraphy, [Validators.required]],
      question: ['', [Validators.required]],
      answer: ['', []],
    });

    this.dataChanged
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((data: any) => {
        this.answers[data?.index].value = data?.value;
      });
  }

  ngOnInit(): void {
    this.handlerOpen();
  }

  handlerOpen(): void {
    this._questionService.isOpen.subscribe((isOpen) => (this.visible = isOpen));
  }

  close(): void {
    this.visible = false;
    this._questionService.isOpen.next(false);
  }

  submitForm(e: any): void {
    this.loading = true;
    const body = this.validateForm.value;
    if (QuestionType.checkbox === body.type) {
      body.answer = this.answers;
    }
    this._questionService.addNewQuestion(body);
    this.loading = false;
    this.close();
    this.answers = [];
    this.validateForm.setValue({
      type: QuestionType.paragraphy,
      question: '',
      answer: '',
    });
  }

  onEnterAnswer(e: any) {
    e.preventDefault();
    const { value } = e.target;
    if (value) {
      this.answers = [...this.answers, { id: Math.random().toString(), value }];
      if (this.answers.length > 0) {
        this.validateForm.controls['answer'].clearValidators();
        this.validateForm.setValue({ ...this.validateForm.value, answer: '' });
      }
    }

  }

  handlerChange(e: any, i: number) {
    const { value } = e.target;
    this.dataChanged.next({ index: i, value });
  }

  handlerTypeChanged(e: any) {
    console.log();

  }
}
