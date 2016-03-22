import {Component} from 'angular2/core';
import {task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
   <h3>Edit Description: {{ task.description }}</h3>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
