/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  _todoArray = [];

  add(todo) {
    this._todoArray.push(todo);
  }
  remove(indexOfTodo) {
    if (indexOfTodo > this._todoArray.length) return;
    this._todoArray.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (index >= this._todoArray.length) return;
    // else if (index === this._todoArray.length) this.add(updatedTodo);
    else this._todoArray[index] = updatedTodo;
  }
  getAll() {
    return this._todoArray.slice();
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this._todoArray.length) return null;
    else return this._todoArray.at(indexOfTodo);
  }
  clear() {
    this._todoArray = [];
  }
}

module.exports = Todo;
