export class TodoListService {
    todoList: Array<String>;
    constructor() {
        this.todoList = ['Make coffee', 'Write code', 'Write documentation'];
    }

    addItem(item: String) {
        this.todoList.push(item);
    }
}