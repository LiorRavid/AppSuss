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
        this.setState({note})
    }



    render(){
        const{note} = this.props
        if (!note) return <React.Fragment></React.Fragment>
        return (
            <div>
                <h3>{note.info.title}</h3>
                <ul className="todos-container clean-list">
                {note.info.todos.map((todo,idx)=>{
                    return <NoteTodo  key={idx} note={note} todo={todo} idx={idx} loadNote={this.loadNote}/>
                })}
                </ul>
            </div>
        )
    }

}







