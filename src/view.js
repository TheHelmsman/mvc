export class View {
  constructor() {
    console.log("View initialized...");

    //  the root element
    this.app = this.getElement("#root");

    //  app title
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";

    //  the form, with a [type="text"] input and submit button
    this.form = this.createElement("form");

    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";

    //  the visual representation of the todo list
    this.todoList = this.createElement("ul", "todo-list");

    // append the input and submit button to the form
    this.form.append(this.input, this.submitButton);

    //  append the title, form and todo list to the app
    this.app.append(this.title, this.form, this.todoList);
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  displayTodos(todos) {
    //  delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    //  show default message if list is empty
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do. Add a task?";
      this.todoList.append(p);
    } else {
      // create todo item nodes for each todo in state
      todos.forEach((todo) => {
        const li = this.createElement("li");
        li.id = todo.id;

        //  each todo item will have a checkbox you can toggle
        const checkbox = this.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        //  the todo item text will be in a contenteditable span
        const span = this.createElement("span");
        span.contentEditable = true;
        span.classList.add("editable");

        //  if the todo is complete, it will have a striethrough
        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          // otherwise - just diplay the text
          span.textContent = todo.text;
        }

        // the todos will also have a delete button
        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        //  append all nodes to the todo list
        this.todoList.append(li);
      });
    }
  }

  //  create an element with an optional CSS class
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  //  retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }
}
