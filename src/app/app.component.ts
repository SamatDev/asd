import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  gameStatus: boolean = false;
  options: FormGroup;

  memoryVolumeControl = new FormControl(3, Validators.min(2));
  speedVolumeControl = new FormControl(2, Validators.min(1));
  modeControl = new FormControl('DIG');
  howManyControl = new FormControl(2, Validators.min(1));


  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.options = this.formBuilder.group({
      memoryVolume: this.memoryVolumeControl,
      speedVolume: this.speedVolumeControl,
      mode: this.modeControl,
      howMany: this.howManyControl
    });
  }
  
  modeDIG = () =>  this.options.controls.mode.value === 'DIG'
  modeDWG = () =>  this.options.controls.mode.value === 'DWG'
  modeIMIG = () => this.options.controls.mode.value === 'IMIG'
  modeIWG = () =>  this.options.controls.mode.value === 'IWG'

}
