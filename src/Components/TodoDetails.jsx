import React from "react";
import { useParams } from "react-router-dom";

export const TodoDetails = () => {
    const {id} = useParams();
    const [todo, setTodo] = React.useState({});

    React.useEffect(()=>{
        fetch(`http://localhost:8080/todo/${id}`)
        .then((res) => res.json())
        .then((res) => (setTodo(res)));
    },[id]);

    const handleToggle = () => {
        const payload = {status : !todo.status}
        fetch(`http://localhost:8080/todo/${id}`,{
            method : "PATCH",
            body : JSON.stringify(payload),
            headers : {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => setTodo(res));
    } 
    return (
        <div>
            <p>{todo.title}</p>
            <p>Status is {todo.status? "Completed" : "notCompleted"}</p>
            <button onClick={handleToggle}>Toggle Status</button>
        </div>
        
    )
}