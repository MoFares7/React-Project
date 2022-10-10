import React, { Component } from 'react';
import TodoForm from './TodoForm/TodoForm';
import './TodoList.css';



class TodoList extends Component {

    render() {
        return (
            <div className='todo-list container d-flex-column w-50 mt-5 pb-3'>
            <TodoForm />
            </div>
        );
    }
}
export default TodoList;