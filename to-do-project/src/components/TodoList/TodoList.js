import React, { Component } from 'react';
import TodoForm from './TodoForm/TodoForm';
import './TodoList.css';

class TodoList extends Component {

    state = {
        todos: [],
        newTodo: ''
    }
 //! Target is input we will write
    handleChange = event => {
        this.setState({newTodo: event.target.value})
    }

    render() {
        return (
            <div className='todo-list container d-flex-column w-50 mt-5 pb-3'>
                <TodoForm newTodo={this.state.newTodo} handleChange={this.handleChange} />
            </div>
        );
    }
}
export default TodoList;