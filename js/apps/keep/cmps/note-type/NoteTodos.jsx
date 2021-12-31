import { noteService } from '../../services/note.service.js'
import { NoteTodo } from './NoteToDo.jsx'

export class NoteTodos extends React.Component {

    state={
        note:null
    }
    
    componentDidMount() {
        this.loadNote()
    }

    loadNote = () => {
        const { note } = this.props
        this.setState({...this.state, note })
    }

    handleChange = (noteId,todoIdx,todo)=>{
        noteService.updateNoteTodo(noteId, todoIdx, todo.isChecked).then((note)=>{
            this.setState({note})
        });
    }

    render(){
        const{note} = this.props
        if (!note) return <React.Fragment></React.Fragment>
        return (
            <div>
                <h3>{note.info.title}</h3>
                <ul className="todos-container clean-list">
                    <NoteTodo note={note}/>
                    {/* { {note.info.todos.map((todo,idx)=>{
                        return (
                            <li key={idx}>
                                <input  type="checkbox" name={idx} onChange={()=>this.handleChange(note.id,idx,todo)}/>
                                <label htmlFor = {idx} className={todo.isChecked ?'checked': 'unchecked'}>{todo.txt}</label>
                            </li>
                            ) 
                    })}  }       */}
                </ul>
            </div>
        )
    }

}





