import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

// fontAwesome elems
import { faPlay, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ])
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class AppHeader {
  @Input() options: FormGroup;
  @Output() gameChanged = new EventEmitter<FormGroup>();

  faPlay = faPlay
  faCogs = faCogs
  
  dialogStatus: boolean = false

  onSelect() {
    this.gameChanged.emit(this.options);
  }

  condition = () => this.options.controls.mode.value === 'IMIG'

  openDialog (event) {
    event.preventDefault()
    this.dialogStatus = !this.dialogStatus
  }
}
