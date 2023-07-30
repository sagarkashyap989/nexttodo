import React from 'react'


import { TodoBtn } from './clientComponent'

export const  TodoItem = ({title, description, id, isCompleted}) =>{


    return (
        <div className="todo">
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>

        <div>
            <TodoBtn id={id} isCompleted = {isCompleted} />
        </div>


        </div>
    )
}