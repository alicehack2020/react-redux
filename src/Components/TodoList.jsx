import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const TodoList = () => {
    const {todos} = useSelector((state) => state);
    console.log(todos);
  return <>
  {
    todos.map((item) => 
        <div key ={item.id}>
            <p>{item.title}</p>
            <p>
                <Link to={`/TodoDetails/${item.id}`}> Details</Link>
            </p>
        </div>
    )
  }</>
}

export {TodoList};