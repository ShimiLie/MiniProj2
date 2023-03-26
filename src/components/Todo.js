import React, { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = () => {
    const [ newTitle, setNewTitle] = useState(todo.title);

    const handleChange = (e) => {
        e.preventDefault();
        if (todo.complete === true) {
            setNewTitle(todo.complete)
        } else {
            todo.title = ""
            setNewTitle(e.target.value);
        }
    }
    
    return (
        <>
            <div className="todo">
                <input 
                style={{ textDecoration: todo.completed && "line-through"}} //strike effect when todo is completed
                type= "text"
                value={todo === "" ? newTitle : todo.title}
                className= "list"
                onChange={handleChange}
                />
                <div>
                    <button
                        className="button-complete"
                        onClick={() => toggleComplete(todo)}
                    >
                        <CheckCircleIcon id="i" />
                    </button>
                    <button
                        className="button-edit"
                        onClick={()=> { handleEdit(todo, newTitle)}}
                    >
                        <EditIcon id="i" />
                    </button>
                    <button
                    className="button-delete"
                    onClick={() => { handleDelete(todo.id)}}
                    >
                        <DeleteIcon id="i" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Todo;