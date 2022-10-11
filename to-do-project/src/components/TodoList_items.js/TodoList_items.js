import React from "react";
import "./TodoList_items.css"



function TodoListItems(props) {
    const { todos } = props;

    return (
        <div className="todoListItems w-full">
            <hr className="hr"></hr>
            {todos.length === 0 && (
                <h3 className="noTodos">Let's get some work done!</h3>
            )}
            {todos.length > 0 && (
                <h3>Done</h3>
          )}
        </div>
    );
}

export default TodoListItems;