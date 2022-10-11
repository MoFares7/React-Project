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
        this.setState({ newTodo: event.target.value });
    }

    handleSubmit = event => {
        //! this to prevent refresh page when add task
        event.preventDefault();

        let todoLength = this.state.todos.length
        this.setState({
            newTodo: '',
            todos: [
                ...this.state.todos,
                {
                    id: todoLength,
                    title: this.state.newTodo,
                    isCompleted: false
                }
            ]
        });
    }

    render() {
        return (
            <div className='todo-list container d-flex-column w-50 mt-5 pb-3'>
                <TodoForm
                    todos={this.state.todos}
                    newTodo={this.state.newTodo}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}
export default TodoList;