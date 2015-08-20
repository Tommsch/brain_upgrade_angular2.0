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
    name: string;
    todoList: Array<String>;
    constructor(todoListService: TodoListService) {
        this.name = 'world';
        this.todoList = todoListService.todoList;
    }

    updateName(name) {
        this.name = name;
    }
}

bootstrap(MyAppComponent, [TodoListService]);