export class TodoListService {
    todoList: Array<String>;
    constructor() {
        this.todoList = ['Make coffee', 'Write code', 'Write documentation'];
    }

    addItem(item: String) {
        this.todoList.push(item);
    }

    removeItem(item: String) {
        var itemIndex = this.todoList.indexOf(item);
        if (itemIndex != -1) {
            this.todoList.splice(itemIndex, 1);
        }
    }
}