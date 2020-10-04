import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor() { }
  // gameStatus
  gameStatusState: boolean = false
  getGameStatus = () => this.gameStatusState
  changeGameStatus = () => this.gameStatusState = !this.gameStatusState
  stopGame = () => this.gameStatusState = false

  // timer
  timer: number = 1
  timerStatus: boolean = false

  startTimer = () => {
      this.timerStatus = true
      let a = setInterval(() => {
        this.timer--
        if(this.timer === 0) {
          clearInterval(a)
          this.timerStatus = false
          this.timer = 1
        }
      }, 1000)

  }

  // points
  points: number = 0
  gameOptions = {
    memoryVolume: 3,
    speedVolume: 2,
    howMany: 2 
  }


  // dig game
  dataImages = [
    {number: 1, value: 'https://games.iqcenter.am/public/img/cards/card9.png'},
    {number: 2, value: 'https://games.iqcenter.am/public/img/cards/card24.png'},
    {number: 3, value: 'https://games.iqcenter.am/public/img/cards/card379.png'},
    {number: 4, value: 'https://games.iqcenter.am/public/img/cards/card18.png'},
    {number: 5, value: 'https://games.iqcenter.am/public/img/cards/card256.png'},
    {number: 6, value: 'https://games.iqcenter.am/public/img/cards/card199.png'}
  ]

  trueArr = []
  todo = []
  done = []

  trueAnswers (levels) {
    for(let i = 0; i < levels; i++) {
      let nums = this.randomizer(this.dataImages.length)
      this.trueArr.push([this.dataImages[nums[0]].number, this.dataImages[nums[1]].number])
    }
  }

  gameStarter(lvl) {
    const arr = this.dataImages.filter(e => e.number !== this.trueArr[lvl][0] && this.trueArr[lvl][1])
    const doneImg = this.dataImages.find(e => e.number == this.trueArr[lvl][0])
    this.done.push(doneImg)
    this.todo.push(...arr)
  }
  gameContinue (level) {
    this.todo = []
    this.done = []
    this.gameStarter(level)
  }

  randomizer(a) {
    let num = Math.floor(Math.random() * a)
    let num2 = Math.floor(Math.random() * a)
    while(num === num2) {
      num2 = Math.floor(Math.random() * a)
    }
    return [num, num2]
  }
}
