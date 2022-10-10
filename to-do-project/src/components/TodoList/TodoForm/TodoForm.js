import React, { Component } from "react";
import './TodoForm.css';


class TodoForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="input-icon">
                        <i className="fa fa-list-ol icon" aria-hidden="true"></i>
                        <input
                            type='text'
                            placeholder="Add a Task..."
                            autoComplete="off" />
                    </div>
                </form>
            </div>
        );
    }
}
export default TodoForm;