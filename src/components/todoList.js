import React, { useState } from "react";
import uuid from "uuid/v4";
import TodoForm from "./todoFrom";
import Todo from "./todo";

const TodoList = (props) => {
    const [todos, setTodos] = useState([
        { todo: "go to school", id: uuid() },
        { todo: "watch a movie", id: uuid() },
    ]);

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => {
            return todo.id !== id
        });
        setTodos(newTodos)
    };

    const updateTodo = (id, message) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    todo: message
                };
            };
            return todo
        });
        setTodos(newTodos);
    };

    const todoList = todos.map(t => {
        return <Todo todo={t}
        key={t.id}
        delete={deleteTodo}
        update={updateTodo}/>
    });

    const addTodo = (message) => {
        setTodos([...todos, {todo: message, id: uuid()}]);
    };

    return(
        <div>
            <h1>Todo List</h1>
            <TodoForm add={addTodo}/>
            {todoList}
        </div>
    )
};

export default TodoList;