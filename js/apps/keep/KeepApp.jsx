
import {noteService} from './services/note.service.js';
import { eventBusService } from '../../services/event-bus.service.js';

import { NoteList } from './cmps/NoteList.jsx';
import { NoteAdd } from './cmps/NoteAdd.jsx';
import { NoteEdit } from './cmps/NoteEdit.jsx';


const { Link,Route } = ReactRouterDOM
export class KeepApp extends React.Component {

    state = {
        notes: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadNotes()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params !== this.props.match.params) {
            this.loadNotes()
        }
    }

    loadNotes = () => {
        const { filterBy } = this.state
        noteService.query(filterBy).then(notes => {
            this.setState({ notes })
        })
    }

    onRemoveNote = (id) => {
        noteService.removeNote(id)
            .then(() => {
                console.log('success');
                eventBusService.emit('user-msg', {txt: 'Deleted succesfully',type: 'success'});
                this.loadNotes();
            })
            .catch(err => {
                console.log('err', err);
                eventBusService.emit('user-msg', {txt: 'Error. Please try later',type: 'error'})
            });
    }

    onUpdateColor = (id, color)=> {
        noteService.updateNoteStyle(id, 'backgroundColor', color)
            .then(() => {
                this.loadNotes();
            });
    }


    render (){
        const { notes } = this.state
        if (!notes) return <React.Fragment></React.Fragment>
        return <section className='keep-app'>
            <NoteAdd loadNotes ={this.loadNotes}></NoteAdd>
            <NoteList notes={notes} remove={this.onRemoveNote} onUpdateColor={this.onUpdateColor} loadNotes ={this.loadNotes}/>
            <Route component={NoteEdit} path="/keep/:noteId" loadNotes ={this.loadNotes} onUpdateColor={this.onUpdateColor} remove={this.onRemoveNote}></Route>
        </section>
    }
}












