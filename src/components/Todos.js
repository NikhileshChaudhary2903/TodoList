import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

 render() {

  const { todos, markComplete, deleteTodo } = this.props;
  // console.log(todos);
  return todos.map((todo) => (
   <TodoItem key={todo.id} todo={todo} markComplete={markComplete} deleteTodo={deleteTodo} />
  ));
 }
}

// PropTypes
Todos.propTypes = {
 todos: PropTypes.array.isRequired
}
export default Todos;
