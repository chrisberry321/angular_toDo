import { Component } from 'angular2/core';
import {Task} from './task.model';
@Component({
  selector: 'kick-audio',
  inputs: ['task'],
  template: `
  <audio controls auto play="true" *ngIf task. === tasks[1]> <source src="./../resources/audio/kick.wav"/>
  </audio>
  `
})
export class kickComponent {
  public task: Task;
  toggleKick(kickState: boolean){
    this.task.kick = kickState;
  }
}
