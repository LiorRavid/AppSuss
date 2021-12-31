
import { noteService } from '../services/note.service.js'
import {eventBusService} from '../../../services/event-bus.service.js'
import { NoteEditTool } from './note-type/NoteEditTool.jsx' 


const { Link} = ReactRouterDOM

export class NoteEdit extends React.Component {

    state = {
        
        note: null,
        inputs: {
            title: '',
            'note-txt': '',
            'note-video': '',
            'note-img': '',
            'note-todos': [],
        }
    }

    componentDidMount(){
        const { noteId } = this.props.match.params;
        noteService. getNoteById(noteId)
            .then(note => {
                this.setState({note},()=>this.loadEditNote())
            });
    }

    loadEditNote = ()=>{
        const{note,inputs} = this.state
        const{title} = inputs
        setTimeout(() => {
            if (note.type === 'note-txt') this.setState({inputs:{...inputs, [note.type]:note.info.txt ,title:note.info.title}})
            else if (note.type === 'note-video') this.setState({inputs:{...inputs, [note.type]:note.info.url, title:note.info.title}})
            else if (note.type === 'note-img') this.setState({inputs:{...inputs, [note.type]:note.info.url, title:note.info.title}})
            else if (note.type === 'note-todos') this.setState({inputs:{...inputs, [note.type]:[...[note.type],note.info.todos],title:note.info.title}})
        },150)
    }

                
    get noteType(){
        return this.state.note.type
    }

    get embedded() {
        if (((this.state.note.info.url).toLowerCase()).includes('watch')) {
            let idx = this.state.note.info.url.indexOf('v=');
            let str = this.state.note.info.url.substring(idx + 2);
            return 'https://www.youtube.com/embed/' + str;
        }
    }


    addTodoInput() {
        const{inputs} = this.state
        let todos = [...inputs['note-todos']]
        let todo = { txt: '', isChecked: false }
        todos.push(todo)
        this.setState({inputs:{...inputs, ['note-todos']:[...['note-todos'],todos]}})
    }

    closeDetails() {
        this.props.history.push('/keep');
    }
    
    render(){
        const {note,inputs} = this.state
        if(!note) return <React.Fragment></React.Fragment>
        const{title} = inputs.title
        return(
            <section className="note-details">
                <Link to="/keep"><div className="modal-background"></div></Link>
                <div style={note.style} className="note-details-modal">
                    <button className="btn-note-detail-close btn-note " onClick={this.closeDetails}></button>
                    <input type="text" placeholder="Title" value={title}  onChange={this.handleChange}/>
                    {(this.noteType === 'note-txt') && <textarea value={inputs['note-txt']} name="" id="" cols="30" rows="10"></textarea>}
                    {(this.noteType === 'note-img') && <div>
                        <img className="edit-note-img" src={note.info.url} alt=""/>
                        <input type="text" value={inputs['note-img']} onChange={this.handleChange}/>
                    </div>}
                    {(this.noteType === 'note-todos') && <div className="edit-todos">
                        <button className="btn-edit-add-todo btn-note" onClick={this.addTodoInput}></button>
                        <ul className="clean-list" >
                            {note.info.todos.map((todo,idx)=>{
                                return (
                                    <li key={idx}>
                                        <input  type="checkbox" name={idx} value={inputs['note-todos'][idx].isChecked} onChange={()=>this.handleChange}/>
                                        <input type="text" value={inputs['note-todos'][idx].txt} onChange={()=>this.handleChange}/>
                                    </li>
                                    ) 
                            })}       
                        </ul>
                    </div>}
                    {(this.noteType === 'note-video') &&<div>
                        <iframe  src={this.embedded} alt=""></iframe>
                        <input type="text" value={inputs['note-video']} onChange={()=>this.handleChange}/>
                    </div>}
                    <div className="edit-bar flex justify-between">
                        <NoteEditTool note={note}/>
                        <button className="btn-note-detail-save btn-note " onClick={this.saveNote}></button>
                    </div>
                </div>
            </section>
        )
    }
}