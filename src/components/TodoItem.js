import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class TodoItem extends Component {

 getStyle = () => {
  const { completed } = this.props.todo;
  // console.log(completed);
  return {
   background: '#f4f4f4',
   padding: '10px',
   borderBottom: '1px #ccc dotted',
   textDecoration: completed ? 'line-through' : 'none'
  }
 }

 render() {
  // console.log(this.props);

  const { id, title } = this.props.todo;
  return (
   <div style={this.getStyle()}>
    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
    <p> {title} </p>
    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}> x </button>
   </div>
  )
 }
}

TodoItem.propTypes = {
 todo: PropTypes.object.isRequired
}

const btnStyle = {
 background: '#ff0000',
 color: '#fff',
 border: 'none',
 padding: '5px 9px',
 borderRadius: '50%',
 cursor: 'pointer',
 float: 'right'
}