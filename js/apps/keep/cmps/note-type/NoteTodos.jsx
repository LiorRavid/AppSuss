
import { noteService } from '../../services/note.service'

export function NoteTodos({ note }) {
    return (
        <div style={note.style }>
            <h3>{note.info.title}</h3>
            <ul className="todos-container clean-list">
                {note.info.todos.map((todo,idx)=>{
                    return (
                        <li key={idx}>
                            <input  type="checkbox"/>
                            <label>{todo.txt}</label>
                        </li>
                        ) 
                })}       
            </ul>
        </div>
    )
}



