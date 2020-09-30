import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class AppHeader {
  options: FormGroup;

  memoryVolumeControl = new FormControl(3, Validators.min(2));
  speedVolumeControl = new FormControl(2, Validators.min(1));
  modeControl = new FormControl('DIG');
  howManyControl = new FormControl(2, Validators.min(1));
  condition = () => {
    return this.modeControl.value === 'IMIG' ? true : false
  }

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      memoryVolume: this.memoryVolumeControl,
      speedVolume: this.speedVolumeControl,
      mode: this.modeControl,
      howMany: this.howManyControl
    });
  }
}


