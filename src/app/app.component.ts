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
    return this.gameMode === 'DIG'
  }
  modeDWG = () => {
    return this.gameMode === 'DWG'
  }
  modeIMIG = () => {
    return this.gameMode === 'IMIG'
  }
  modeIWG = () => {
    return this.gameMode === 'IWG'
  }

  @ViewChild(AppHeader) child: AppHeader;
  ngAfterViewInit() {
    
  }

  clicker() {
    console.log(this.gameMode)
  }

  
}
