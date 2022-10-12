import React, { Component } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoListItems from '../TodoList_items.js/TodoList_items';
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
         
        //? check if newTodo is empty or not
        if (this.state.newTodo === "") {
            return
        }
        else {
            
        
            let todoLength = this.state.todos.length
            this.setState({
                newTodo: '',
                todos: [
                    ...this.state.todos,
                    {
                        id: (todoLength += 1),
                        title: this.state.newTodo,
                        isCompleted: false
                    }
                ]
            });
        }
    }

    toggleCompleted = (event, index) => {
        const todoCompleted = this.state.todos.filter((todo) => {
            if (todo.id === index + 1) {
                todo.isCompleted = event.target.checked;
            }
            return todo;
        });
        this.setState({ todos: todoCompleted });
    };

    removeTodo = (index) => {
        const { todos } = this.state;
        todos.splice(index, 1);
        this.setState({
            todos,
        });
    };

    editTodo = (index) => {
        const newTodo = prompt('Let\'s make something changes');
        const { todos } = this.state;
        todos.filter(todo => {
            if (todo.id === index + 1) {
                todo.title = newTodo;
            }
            return todo;
        });
        this.setState({ todos });

    }


    render() {
        return (
            <div className='todo-list container d-flex-column w-50 mt-5 pb-3'>
                <h2 className='intro'>Welcome in Our Sit</h2>
                <TodoForm
                    todos={this.state.todos}
                    newTodo={this.state.newTodo}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <TodoListItems todos={this.state.todos}
                    handleChange={this.toggleCompleted}
                    handleOnRemove={this.removeTodo}
                    handleOnEdit={this.editTodo}
                />
            </div>
        );
    }
}

export default TodoList;