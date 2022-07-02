import React from 'react';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid";
import { addTodo } from '../Redux/action';

const TodoInput = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState([]);
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleClick = () =>{
        const payload = {
            title: inputValue,
            status: false,
            id: uuid()
        }
        dispatch(addTodo(payload));
    }
  return (<>
    <input type="text" placeholder='Enter Todo' value={inputValue} onChange={handleChange}/>
    <button onClick={handleClick}>Add Todo</button>
    </>
  )
}

export {TodoInput};