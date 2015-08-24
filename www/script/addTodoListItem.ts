/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {TodoListService} from './todoListService';

// Annotation section
@Component({
    selector: 'add-todo-list-item'
})

@View({
    templateUrl: 'template/addTodoListItem.html',
    styleUrls: ['css/addTodoListItem.css']
})

// Component controller
export class AddTodoListItem {
    todoItem: String;
    todoListService: TodoListService;
    constructor(todoListService: TodoListService) {
        this.todoItem = null;
        this.todoListService = todoListService;
    }

    updateTodoItem(item) {
        this.todoItem = item;
    }

    addItem() {
        this.todoListService.addItem(this.todoItem);
        this.todoItem = null;
    }
}