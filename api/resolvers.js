const crypto = require('crypto');
let todos = require('./todos');

class Todo {
  static id() {
      return crypto.randomBytes(10).toString('hex');
  }
  
  constructor({ title, completed = false, steps = [] }) {
    this.id = Todo.id();
    this.title = title;
    this.completed = completed;
    this.steps = steps;
  }
}

module.exports = {
  todo: ({ id }) => todos.find(todo => todo.id == id),
  todos: ({ status }) => {
    switch (status) {
      case 'COMPLETED': return todos.filter(todo => todo.completed);
      case 'UNCOMPLETED': return todos.filter(todo => !todo.completed)
      default: return todos;
    }
  },
  createTodo: ({ input }) => {
    const todo = new Todo(input);
    
    todos.push(todo);
    
    return todo;
    
    todos.push({ ...input, id: 4 })
  },
  updateTodo: ({ id, input }) => {
    const todo = todos.find(todo => todo.id === id);
    
    Object.assign(todo, input);
    
    return todo;
  },
  
  deleteTodo: ({ id }) => {
    const todo = todos.find(todo => todo.id === id);
    
    todos = todos.filter(todo => todo.id != id);
    
    return todo.id;
  }
};