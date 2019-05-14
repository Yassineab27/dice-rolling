import React, {useState} from "react";

const TodoForm = (props) => {
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todo) {
            return alert("Please add a todo!")
        };
        
        props.add(todo);
        setTodo("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={todo}
            placeholder="what to do ?"
            onChange={handleChange}/>
            <button>Add todo</button>
        </form>
    )
};

export default TodoForm;