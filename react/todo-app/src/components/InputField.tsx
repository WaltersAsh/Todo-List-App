import React from 'react'
import './comp-styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>; 
}

const InputField = ({ todo, setTodo }: Props) => {
    return (
        <form className='input'>
            <input 
                type='text' 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                placeholder='Enter your todo' 
                className='input-box'>
            </input>
            <button type='submit' className='input-submit'>Add</button>
        </form>
    )
}

export default InputField;