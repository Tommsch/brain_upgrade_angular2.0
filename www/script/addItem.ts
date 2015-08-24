/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {TodoListService} from './todoListService';

// Annotation section
@Component({
    selector: 'add-item'
})

@View({
    templateUrl: 'template/addItem.html',
    styleUrls: ['css/addItem.css']
})

// Component controller
export class AddItem {
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

    removeItem(item) {
        this.todoListService.removeItem(item);
    }
}