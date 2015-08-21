/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {TodoListService} from './todoList';

// Annotation section
@Component({
    selector: 'my-app'
})

@View({
    templateUrl: 'template/main.html',
    styleUrls: ['css/main.css'],
    directives: [NgFor]
})

// Component controller
class MyAppComponent {
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

bootstrap(MyAppComponent, [TodoListService]);