import { noteService } from './services/note.service.js'
import { eventBusService } from '../../services/event-bus.service.js';

export class NoteAdd extends React.Component {

    state = {
        placeHolder: 'Whats on your mind?',
        chosenNoteType: 'note-txt',
        value: '',
        x: null,
    }

    handleChange = ({ target }) => {
        const value = target.value
        this.setState({ value: value })
    }

    onChooseNoteType = ( ev, placeHolder, type)=> {
        ev.stopPropogations;
        this.setState({placeHolder: placeHolder, chosenNoteType: type});
    }

    onAddNote = (ev) => {
        ev.preventDefault();
        const {chosenNoteType,value} = this.state
        if (chosenNoteType === 'note-todos') {
            this.setState({value: {...this.makeTodo}});
        }
        noteService.addNote(chosenNoteType, value).then(note => {
            this.props.loadNotes();
            this.setState({value:''});
            eventBusService.emit('user-msg', {txt: 'Added succesfully',type: 'success'});
        });
    }

    makeTodo = ()=> {
        let list = this.state.value.split(',');
        return list.map(item => {
            return { txt: item, isChecked: false };
        });
    }

    render() {
        
        return (
            <section className="note-add flex justify-center">
                <div>
                    <form onSubmit={this.onAddNote}>
                        <input type="text" value={this.state.value} placeholder={this.state.placeHolder} onChange={this.handleChange}/>
                    </form>
                    <section>
                        <button className="btn-note-txt btn-note" onClick={(ev)=> this.onChooseNoteType(ev,'Whats on your mind?','note-txt')}></button>
                        <button className="btn-note-video btn-note" onClick={(ev)=> this.onChooseNoteType(ev,'Enter video URL...','note-video')}></button>
                        <button className="btn-note-img btn-note" onClick={(ev)=> this.onChooseNoteType(ev,'Enter image URL...','note-img')}></button>
                        <button className="btn-note-todos btn-note" onClick={(ev)=> this.onChooseNoteType(ev,'Enter comma separeted list','note-todos')}></button>
                        <button className="btn-add-todo btn-note" onClick={(ev)=> this.onChooseNoteType}></button>
                    </section>
                </div>
            </section>
        );
    }
}

