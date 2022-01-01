
import { noteService } from './../../services/note.service.js'


export class NoteTodo extends React.Component {

    state={
        isChecked:this.props.todo.isChecked,
        note: null
    }

    someInputRef = React.createRef()

    componentDidMount(){
        const{note,todo} = this.props
        this.someInputRef.current.checked = todo.isChecked
        this.setState({note,isChecked:todo.isChecked}
        )

    }

    handleChange = (noteId,todoIdx)=>{
        noteService.updateNoteTodo(noteId, todoIdx,this.someInputRef.current.checked).then((note)=>{
            this.setState({note,isChecked:this.someInputRef.current.checked})
        });
    }


    render(){
        const{note,todo,idx} = this.props
        const{isChecked} = this.state
        if (!note) return <React.Fragment></React.Fragment>
        return (
            <li key={idx}>
                <input  ref={this.someInputRef} type="checkbox" name={idx} onChange={()=>this.handleChange(note.id,idx)}/>
                <label htmlFor = {idx} className={isChecked ?'checked': 'unchecked'}>{todo.txt}</label>
            </li>      
        )

    }
}