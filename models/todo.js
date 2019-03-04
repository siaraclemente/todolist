const todos = [
    {todo: 'Feed Animals', done: true},
    {todo: 'Get Groceries', done: false},
    {todo: 'Cook Dinner', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, todo) {
    todos.splice(id, 1, todo);
  }
  
  function deleteOne(id) {
    todos.splice(id, 1);
  }
  
  function create(todo) {
    todos.push(todo);
  }
  
  function getOne(id) {
    return todos[id];
  }
  
  function getAll() {
    return todos;
  }