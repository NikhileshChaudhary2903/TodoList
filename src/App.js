import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import { AddTodo } from './components/AddTodo';
import uuid from 'uuid';

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Drink Water",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Eat Omlette",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Finish React Tuts",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header style={headerStyle} />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
export default App;
