import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class AppHeader {
  @Input() options: FormGroup;
  @Output() userNameChange = new EventEmitter<FormGroup>();

  constructor(fb: FormBuilder) {
  }

  //testing
  ngOnInit() {
    console.log(this.options)
  }

  onSelect(mode: string) {
    this.userNameChange.emit(this.options);
  }

  condition = () => {
    return this.options.controls.mode.value === 'IMIG' ? true : false
  }
}


