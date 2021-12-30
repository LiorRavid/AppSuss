import { noteService } from './services/note.service.js'
import { eventBusService } from '../../services/event-bus.service.js';

export class NoteAdd extends React.Component {

    state = {
        placeHolder: 'Whats on your mind?',
        chosenNoteType: 'note-txt',
        value: '',
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
            const todoValue = this.makeTodo()
            console.log(todoValue)
            this.setState((prevState)=> ({...prevState, value: [...todoValue]}), ()=> {this.NoteAdd()});
        }else this.NoteAdd()
    }

    NoteAdd = ()=>{
        console.log('value',this.state.value)
        console.log('value',this.state.chosenNoteType)
        const {chosenNoteType,value} = this.state
        noteService.addNote(chosenNoteType, value).then(note => {
            this.props.loadNotes();
            this.setState((prevState)=> ({...prevState, value: ''}));
            eventBusService.emit('user-msg', {txt: 'Added succesfully',type: 'success'});
        });
    }

    makeTodo = ()=> {
        let list = this.state.value.split(',');
        console.log('list',list)
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

