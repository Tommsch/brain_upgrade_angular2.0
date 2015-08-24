/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2'
import {TodoListService} from './todoListService'
import {AddTodoListItem} from './addTodoListItem'
import {TodoList} from './todoList'

// Annotation section
@Component({
    selector: 'todo-list-app'
})

@View({
    templateUrl: 'template/todoListApp.html',
    styleUrls: ['css/todoListApp.css'],
    directives: [TodoList, AddTodoListItem]
})

// Component controller
class TodoListApp {
    constructor() {
    }
}

bootstrap(TodoListApp, [TodoListService]);