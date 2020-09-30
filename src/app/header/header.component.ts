import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class AppHeader {
  @Input() options: FormGroup;
  @Output() gameChanged = new EventEmitter<FormGroup>();

  onSelect() {
    this.gameChanged.emit(this.options);
  }

  condition = () => {
    return this.options.controls.mode.value === 'IMIG' ? true : false
  }
}


