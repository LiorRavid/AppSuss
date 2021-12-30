

export function NoteTodos({ note, updateCheck}) {

    return (
        <div>
            <h3>{note.info.title}</h3>
            <ul className="todos-container clean-list">
                {note.info.todos.map((todo,idx)=>{
                    return (
                        <li key={idx}>
                            <input  type="checkbox" onChange={()=>updateCheck(note.id,idx,todo)}/>
                            <label className={todo.isChecked ?'checked': 'unchecked'}>{todo.txt}</label>
                        </li>
                        ) 
                })}       
            </ul>
        </div>
    )
}



