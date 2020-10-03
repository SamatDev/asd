import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  gameStatusState: boolean = false

  getGameStatus () {
    return this.gameStatusState
  }

  changeGameStatus () {
    this.gameStatusState = !this.gameStatusState
  }
}
