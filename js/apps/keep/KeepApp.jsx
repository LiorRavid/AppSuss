
import {noteService} from './services/note.service.js';
import { eventBusService } from '../../services/event-bus.service.js';

import { NoteList } from './cmps/NoteList.jsx';
import { NoteAdd } from './cmps/NoteAdd.jsx';


const { Link } = ReactRouterDOM
export class KeepApp extends React.Component {

    state = {
        notes: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadNotes()
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

    render (){
        const { notes } = this.state
        if (!notes) return <React.Fragment></React.Fragment>
        return <section className='keep-app'>
            <NoteAdd loadNotes ={this.loadNotes}></NoteAdd>
            <NoteList notes={notes} remove={this.onRemoveNote}/>
        </section>
    }
}












