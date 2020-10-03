import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'd-i-g',
    templateUrl: './doubleimg.component.html',
    styleUrls: ['./doubleimg.component.scss']
})

export class DIG {
    faPlay = faPlay
    gameStatus: boolean = false

    todo = [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ];

    done = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];

    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
    }

    goPlay(e) {
        e.preventDefault()
        this.gameStatus = !this.gameStatus
    }
}

