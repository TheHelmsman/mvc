export class Model {
  constructor() {
    console.log("Model initialized...");
    this.todos = [
      { id: 1, text: "Participate in Architectural meetup", complete: true },
      { id: 2, text: "Participate in FrontEnd meetup", complete: false },
    ];
  }

  addTodo(todoText) {
    console.log("Model addTodo - todoText: ", todoText);
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };
    this.todos.push(todo);
  }

  editTodo(id, todoText) {
    console.log("Model editTodo - id: " + id + " todoText: " + todoText);
  }

  deleteTodo(id) {
    console.log("Model deleteTodd - id: ", id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleToto(id) {
    console.log("Model toggleToto - id: ", id);
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: todo.text, complete: !todo.complete }
        : todo
    );
  }
}
