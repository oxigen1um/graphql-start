const todos = require('./todos');

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
    const todo = { ...input, id: 4 };
    
    todos.push(todo);
    
    return todo;
    
    todos.push({ ...input, id: 4 })
  },
  updateTodo: ({ id, input }) => {},
  deleteTodo: ({ id }) => {}
};