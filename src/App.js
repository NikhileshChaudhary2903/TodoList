import React from 'react';
import './App.css';
import Todos from './components/Todos';
class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "take out the garbage",
        completed: false
      },
      {
        id: 2,
        title: "learn react",
        completed: false
      },
      {
        id: 3,
        title: "learn ruby",
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1> Hello World </h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }

}

export default App;
