
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
        this.loadNoteToEdit()
    }


    loadNoteToEdit = ()=>{
        const { noteId } = this.props.match.params;
        noteService. getNoteById(noteId)
            .then(note => {
                this.loadEditInputs(note)
            });
    } 

    loadEditInputs = (note)=>{
        const{inputs} = this.state
            if (note.type === 'note-txt') this.setState({note:{...note},inputs:{...inputs, [note.type]:note.info.txt ,title:note.info.title}})
            else if (note.type === 'note-video') this.setState({note:{...note},inputs:{...inputs, [note.type]:note.info.url, title:note.info.title}})
            else if (note.type === 'note-img') this.setState({note:{...note},inputs:{...inputs, [note.type]:note.info.url, title:note.info.title}})
            else if (note.type === 'note-todos') this.setState({note:{...note},inputs:{...inputs, [note.type]:note.info.todos,title:note.info.title}})
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


    handleChange=(ev,idx=null)=>{
        const{inputs}=this.state
        const {name,value} = ev.target
        if(name==='title') this.setState({inputs:{...inputs, title:value}})
        else if(name=== 'todos'){
            let input = {...inputs}
            let todos = [...input['note-todos']]
            todos[idx].txt = value
            input['note-todos'] = todos
            this.setState({inputs:input})
        } 
        else if(name=== 'img')this.setState({inputs:{...inputs, ['note-img']:value}})
        else if(name=== 'video')this.setState({inputs:{...inputs, ['note-video']:value}})
        else if(name=== 'txt')this.setState({inputs:{...inputs, ['note-txt']:value}})
    }

    onRemoveNote = (id) => {
        noteService.removeNote(id)
            .then(() => {
                console.log('success');
                eventBusService.emit('user-msg', {txt: 'Deleted succesfully',type: 'success'});
                this.props.history.push('/keep');
            })
            .catch(err => {
                console.log('err', err);
                eventBusService.emit('user-msg', {txt: 'Error. Please try later',type: 'error'})
            });
    }

    onUpdateColor = (id, color)=> {
        noteService.updateNoteStyle(id, 'backgroundColor', color)
            .then(() => {
                this.loadNoteToEdit()
            });
    }


    addTodoInput= ()=> {
        const{inputs} = this.state
        let todos = [...inputs['note-todos']]
        let todo = { txt: ' ', isChecked: false }
        todos.push(todo)
        this.setState({inputs:{...inputs, ['note-todos']:todos}})
    }

    onClose= ()=>{
        this.setState({note:null},()=> this.props.history.push('/keep'))
    }

    updateNoteToSave = ()=> {

        const {note,inputs} = this.state;
        const{info} = this.state.note
        if (note.type === 'note-txt') {
            this.setState({note:{...note, info:{...note.info, txt: inputs['note-txt'],title:inputs.title}}},()=>{
                this.saveNote(note)})
        }else if(note.type === 'note-img'){
            this.setState({note:{...note, info:{...note.info, url: inputs['note-img'],title:inputs.title}}},()=>this.saveNote(this.state.note))
        }else if(note.type === 'note-video') {
            this.setState({note:{...note, info:{...note.info, url: inputs['note-video'],title:inputs.title}}},()=>this.saveNote(note))
        }
        else if (note.type === 'note-todos'){
            let todos = [...inputs['note-todos']]
            let filterTodos = todos.filter((todo => todo.txt !== ''))
            this.setState({note:{...note,info:{...note.info, todos: filterTodos, title:inputs.title}}},()=>this.saveNote())
        }
    }


    saveNote = ()=>{
        noteService.saveEditNote(this.state.note)
            .then(()=>{
                    console.log('success');
                    eventBusService.emit('user-msg', {txt: 'Updated succesfully',type: 'success'});
                    this.props.history.push('/keep');
                })
                .catch(err => {
                    console.log('err', err);
                    eventBusService.emit('user-msg', {txt: 'Error. Please try later',type: 'error'})
                });
    }

    
    render(){
        const {note,inputs} = this.state
        if(!note) return <React.Fragment></React.Fragment>
        const{title} = this.state.inputs
        return(
            <section className="note-details">
                <Link to="/keep"><div className="modal-background"></div></Link>
                <div style={note.style} className="note-details-modal">
                    <button className="btn-note-detail-close btn-note " onClick={this.onClose}></button>
                    <input type="text" placeholder="Title" value={title} name='title' onChange={this.handleChange}/>
                    {(this.noteType === 'note-txt') && <textarea value={inputs['note-txt']} name="txt" id="" cols="30" rows="10" onChange={this.handleChange}></textarea>}
                    {(this.noteType === 'note-img') && <div>
                        <img className="edit-note-img" src={note.info.url} alt=""/>
                        <input type="text" value={inputs['note-img']} name="img" onChange={this.handleChange}/>
                    </div>}
                    {(this.noteType === 'note-todos') && <div className="edit-todos">
                        <button className="btn-edit-add-todo btn-note" onClick={this.addTodoInput}></button>
                        <ul className="clean-list" >
                            {inputs['note-todos'].map((todo,idx)=>{
                                return (
                                    <li key={idx}>
                                        <input  type="checkbox" name='todo' onChange={this.handleChange}/>
                                        <input type="text" name="todos" value={inputs['note-todos'][idx].txt} onChange={(ev)=>this.handleChange(ev,idx)}/>
                                    </li>
                                    ) 
                            })}       
                        </ul>
                    </div>}
                    {(this.noteType === 'note-video') &&<div>
                        <iframe  src={this.embedded} alt=""></iframe>
                        <input type="text" value={inputs['note-video']} name="video" onChange={()=>this.handleChange}/>
                    </div>}
                    <div className="edit-bar flex justify-between">
                        <NoteEditTool note={note} onUpdateColor={this.onUpdateColor} onRemoveNote={this.onRemoveNote}/>
                        <button className="btn-note-detail-save btn-note " onClick={this.updateNoteToSave}></button>
                    </div>
                </div>
            </section>
        )
    }
}