import { DynamicCmp } from './note-type/DynamicCmp.jsx'
import { noteService } from '../services/note.service.js';

export class NotePreview extends React.Component{

    state={
        noteType: this.props.note.type,
        isChecked: null
    }

    updateCheck = (noteId,todoidx, todo)=> {
        noteService.updateNoteTodo(noteId, todoidx, todo.isChecked).then(()=>{
            this.setState({isChecked: !this.state.isChecked},()=>{console.log(this.state.isChecked)})
        });
    }

    render(){
        console.log('render');
        const{noteType} = this.state
        const{note} = this.props
        return (
                <article className='note-preview'>
                    <DynamicCmp type={noteType} note={note} updateCheck={this.updateCheck}/>
                </article>
        )
    }
}


