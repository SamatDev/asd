import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { faPlay, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { StateService } from '../../state.service'

@Component({
    selector: 'd-i-g',
    templateUrl: './doubleimg.component.html',
    styleUrls: ['./doubleimg.component.scss']
})

export class DIG{
    constructor(private stateService: StateService) {}
    faPlay = faPlay
    faLongArrowAltRight = faLongArrowAltRight
    gameStatus = () => this.stateService.gameStatusState
    // STARTER
    level: number = 0
    onClick(e) {
      e.preventDefault()
      this.stateService.startTimer()
      this.stateService.changeGameStatus()
      this.stateService.trueAnswers(this.stateService.gameOptions.memoryVolume)
      this.stateService.gameStarter(this.level)
      this.imager()
      this.anounced = false
    }
    // END STARTER

    timer = () => this.stateService.timer
    getTimerStatus = () => this.stateService.timerStatus

    todo = () => this.stateService.todo
    done = () => this.stateService.done

    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, 
                        event.previousIndex, 
                        event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
      if(this.stateService.done.length == 2 &&
          this.stateService.done[1].number == this.stateService.trueArr[this.level][1]
        ) {
          this.stateService.points++ 
          alert('nice')
      }else{
        this.stateService.done.pop()
        alert('error')
      }
      this.gameGo()
    }

    gameGo () {
      if(this.level >= this.stateService.gameOptions.memoryVolume - 1) {
        this.stateService.stopGame()
        this.stateService.trueArr = []
        this.stateService.todo = []
        this.stateService.done = []
        this.level = 0
      }else{
        this.level++
        this.stateService.gameContinue(this.level)
      }
    }
    // END DRAGNDROP

    // anouncer
    anounced: boolean = true
    anounceLevel: number = 0

    imageDone = ''
    imageTwo = ''

    imager () {
      for(
        let i = 0;
        i < this.stateService.gameOptions.memoryVolume;
        i++
      ) {
        setTimeout(()=> {
          this.anounceLevel = i + 1
          this.imageDone = this.stateService.dataImages[this.stateService.trueArr[i][0] - 1 ].value
          this.imageTwo = this.stateService.dataImages[this.stateService.trueArr[i][1] - 1].value
        }, i * this.stateService.gameOptions.speedVolume * 1000)
      }
      setTimeout(()=> {
        this.anounced = true
      }, this.stateService.gameOptions.memoryVolume * this.stateService.gameOptions.speedVolume * 1000)
    }
}

