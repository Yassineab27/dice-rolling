import React, { useState } from "react";

const Todo = (props) => {
    const { todo, id } = props.todo;

    const [message, setMessage] = useState(todo);
    const [isEditing, setIsEditing] = useState(false);

    
    const handleDelete = () => {
        props.delete(id)
    };

    const handleIsEditing = () => {
        setIsEditing(!isEditing)
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        props.update(id, message);
        handleIsEditing();
    };

    const display = isEditing ? (
        <form onSubmit={handleUpdate}>
            <input type="text"
            value={message}
            onChange={handleChange}/>
            <button>Update</button>
        </form>
    ) : (
        <li>
            <h3>{todo}</h3>
            <button onClick={handleIsEditing}>Edit</button>
            <button onClick={handleDelete}>X</button>
        </li>
    )

    return(
        <ul>
            {display}
        </ul>
    )
};

export default Todo;