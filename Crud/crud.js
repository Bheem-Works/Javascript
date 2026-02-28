class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.completed = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

class TodoList {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  // CREATE
  addTodo(title) {
    if (!title || !title.trim()) {
      throw new Error("Title is required.");
    }

    const todo = new Todo(this.nextId++, title.trim());
    this.todos.push(todo);
    return todo;
  }

  // READ (single)
  getTodoById(id) {
    return this.todos.find((todo) => todo.id === id) || null;
  }

  // READ (all)
  getAllTodos() {
    return [...this.todos];
  }

  // UPDATE
  updateTodo(id, newTitle) {
    const todo = this.getTodoById(id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found.`);
    }
    if (!newTitle || !newTitle.trim()) {
      throw new Error("New title is required.");
    }

    todo.title = newTitle.trim();
    todo.updatedAt = new Date();
    return todo;
  }

  // UPDATE (mark complete/incomplete)
  toggleTodoStatus(id) {
    const todo = this.getTodoById(id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found.`);
    }

    todo.completed = !todo.completed;
    todo.updatedAt = new Date();
    return todo;
  }

  // DELETE
  deleteTodo(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new Error(`Todo with id ${id} not found.`);
    }

    const [deletedTodo] = this.todos.splice(index, 1);
    return deletedTodo;
  }
}

// Example usage
const myTodos = new TodoList();

myTodos.addTodo("Follow the articulation methods which is guided by the video.");
myTodos.addTodo("Study The Books and read revise the english,economics,account,computer");
myTodos.addTodo("Practice coding daily");

myTodos.updateTodo(2, "Build CRUD Todo app with classes");
myTodos.toggleTodoStatus(1);
myTodos.deleteTodo(3);

console.log("All Todos:", myTodos.getAllTodos());
