import React from 'react'
import { noteService } from '../../services/note.service.js'


export class NoteTodo extends React.Component {

    state={
        isShown:null
    }

    render(){
        const{note} = this.props

        return (
            <React.Fragment>
                {note.info.todos.map((todo,idx)=>{
                    return (
                        <li key={idx}>
                            <input  type="checkbox" name={idx} onChange={()=>this.handleChange(note.id,idx,todo)}/>
                            <label htmlFor = {idx} className={todo.isChecked ?'checked': 'unchecked'}>{todo.txt}</label>
                        </li>
                        ) 
                })}
            </React.Fragment>       
        )

    }
}