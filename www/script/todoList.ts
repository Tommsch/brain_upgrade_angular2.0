/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {TodoListService} from './todoListService';

// Annotation section
@Component({
    selector: 'todo-list'
})

@View({
    templateUrl: 'template/todoList.html',
    styleUrls: ['css/todoList.css'],
    directives: [NgFor]
})

// Component controller
export class TodoList {
    todoListService: TodoListService;
    constructor(todoListService: TodoListService) {
        this.todoListService = todoListService;
    }
}