import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-confirm',
  templateUrl: './pop-confirm.component.html',
  styleUrls: ['./pop-confirm.component.scss']
})
export class PopConfirmComponent implements OnInit {
  @Input() title: string = 'Are you sure delete this product?'
  @Output() onConfirm = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  confirmRemove(): void {
    this.onConfirm.emit('confirm');
  }

}
