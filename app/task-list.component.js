System.register(['angular2/core', './task.component', './edit-task-details.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_component_1, edit_task_details_component_1;
    var TaskListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_component_1_1) {
                task_component_1 = task_component_1_1;
            },
            function (edit_task_details_component_1_1) {
                edit_task_details_component_1 = edit_task_details_component_1_1;
            }],
        execute: function() {
            // task list component
            TaskListComponent = (function () {
                function TaskListComponent() {
                    this.onTaskSelect = new core_1.EventEmitter();
                }
                TaskListComponent.prototype.taskClicked = function (clickedTask) {
                    console.log('child', clickedTask);
                    this.selectedTask = clickedTask;
                    this.onTaskSelect.emit(clickedTask);
                };
                TaskListComponent = __decorate([
                    core_1.Component({
                        selector: 'task-list',
                        inputs: ['taskList'],
                        outputs: ['onTaskSelect'],
                        directives: [task_component_1.TaskComponent, edit_task_details_component_1.EditTaskDetailsComponent],
                        template: "\n  <task-display *ngFor=\"#currentTask of taskList\"\n    (click)=\"taskClicked(currentTask)\"\n    [class.selected]=\"currentTask === selectedTask\"\n    [task]=\"currentTask\">\n  </task-display>\n  <edit-task-details [task]=\"selectedTask\">\n </edit-task-details>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskListComponent);
                return TaskListComponent;
            }());
            exports_1("TaskListComponent", TaskListComponent);
        }
    }
});
//# sourceMappingURL=task-list.component.js.map