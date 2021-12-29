import { NoteList } from './cmps/NoteList.jsx'
import {noteService} from './services/note.service.js'

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

    render (){
        const { notes } = this.state
        if (!notes) return <React.Fragment></React.Fragment>
        return <section className='keep-app'>
            <NoteList notes={notes}/>
        </section>
    }
}












