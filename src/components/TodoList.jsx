import React from "react";

function TodoList({ todos }) {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <p className="Task" key={index}>
                    {todo}
                </p>
            ))}
        </div>
    );
}

export default TodoList;