import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {AppHeader} from './header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'my-app';
  gameMode:string = 'IMIG'

  modeDIG = () => {
    return this.gameMode === 'DIG' ? true : false
  }
  modeDWG = () => {
    return this.gameMode === 'DWG' ? true : false
  }
  modeIMIG = () => {
    return this.gameMode === 'IMIG' ? true : false
  }
  modeIWG = () => {
    return this.gameMode === 'IWG' ? true : false
  }

  @ViewChild(AppHeader) child: AppHeader;
  ngAfterViewInit() {
    
  }

  clicker() {
    console.log(this.gameMode)
  }

  
}
