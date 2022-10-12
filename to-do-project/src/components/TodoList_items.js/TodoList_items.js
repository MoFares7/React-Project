import React from "react";
import "./TodoList_items.css"



function TodoListItems(props) {
    const { todos } = props;

    const todoItems = todos.map((todo, index) => {
        return (
            <div className="todoComponent d-flex w-75 mx-auto" key={todo.id}>
                <div className="todoCompLeft">
                    <input type="checkbox"
                        className="checkbox-element"
                        style={{
                            size: 20,
                            checkedColor: "#2e3238",
                            uncheckedColor: "#343a40",
                            hoverColor: "#343a40"
                        }}
                        onChange={(event) => props.handleOnChange(event, index)}


                    />
                </div>
                <div className="todoCompRight d-flex justify-content-between flex-grow-1 px-3" >
                    <div className="todoTitle">
                        <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                            {todo.title}

                        </span>
                    </div>
                    <div>
                        <i
                            className="fa fa-pencil mr-3"
                            aria-hidden="true"
                            onClick={() => props.handleOnEdit(index)}
                        ></i>
                        <i onClick={() => props.handleOnRemove(index)}
                            className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )

    })


    return (
        <div className="todoListItems w-full">
            <hr className="hr"></hr>
            {todos.length === 0 && (
                <h3 className="noTodos">Let's get some work done!</h3>
            )}
            {todos.length > 0 && todoItems

            }
        </div>
    );
}

export default TodoListItems;