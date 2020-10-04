import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  options: FormGroup;

  memoryVolumeControl = new FormControl(3, Validators.min(2));
  speedVolumeControl = new FormControl(2, Validators.min(1));
  modeControl = new FormControl('DIG');
  howManyControl = new FormControl(2, Validators.min(1));

  gameStatus: boolean = false

  constructor(private formBuilder: FormBuilder, private stateService: StateService) {
  }


  ngOnInit() {
    this.options = this.formBuilder.group({
      memoryVolume: this.memoryVolumeControl,
      speedVolume: this.speedVolumeControl,
      mode: this.modeControl,
      howMany: this.howManyControl
    });

    this.stateService.gameOptions.memoryVolume = this.options.controls.memoryVolume.value
    this.stateService.gameOptions.speedVolume = this.options.controls.speedVolume.value
    this.stateService.gameOptions.howMany = this.options.controls.howMany.value

  }
  
  modeDIG = () =>  this.options.controls.mode.value === 'DIG'
  modeDWG = () =>  this.options.controls.mode.value === 'DWG'
  modeIMIG = () => this.options.controls.mode.value === 'IMIG'
  modeIWG = () =>  this.options.controls.mode.value === 'IWG'

  points = () => this.stateService.points
}
