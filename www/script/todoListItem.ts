/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2'
import {TodoListService} from './todoListService'

// Annotation section
@Component({
    selector: 'todo-list-item',
    properties: ['todoitem']
})

@View({
    templateUrl: 'template/todoListItem.html'
})

// Component controller
export class TodoListItem {
    todoitem;
    todoListService: TodoListService;
    constructor(todoListService: TodoListService) {
        this.todoListService = todoListService;
    }

    removeItem(item) {
        this.todoListService.removeItem(item);
    }
}