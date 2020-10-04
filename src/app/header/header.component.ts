import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

// fontAwesome elems
import { faPlay, faCogs } from '@fortawesome/free-solid-svg-icons';
import { StateService } from '../state.service';

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
  constructor (private stateService: StateService) {}
  gameStatus = () => this.stateService.gameStatusState
  onClick(e) {
    e.preventDefault()
    if(!this.gameStatus()) {
      this.stateService.startTimer()
    }else{
      this.stateService.timerStatus = false
    }
    this.stateService.changeGameStatus()
  }

  faPlay = faPlay
  faCogs = faCogs
  
  dialogStatus: boolean = false

  memoryVolume = this.stateService.gameOptions.memoryVolume
  speedVolume = this.stateService.gameOptions.speedVolume
  howMany = this.stateService.gameOptions.howMany


  onSelect() {
    this.gameChanged.emit(this.options)
    this.stateService.gameOptions.memoryVolume = this.options.controls.memoryVolume.value
    this.stateService.gameOptions.speedVolume = this.options.controls.speedVolume.value
    this.stateService.gameOptions.howMany = this.options.controls.howMany.value
    this.stateService.stopGame()
  }

  condition = () => this.options.controls.mode.value === 'IMIG'

  openDialog (event) {
    event.preventDefault()
    this.dialogStatus = !this.dialogStatus
  }
  
}
