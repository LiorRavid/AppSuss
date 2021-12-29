
import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes }) {
    return (
        <section className="note-list">
            <ul className="note-list-ul clean-list ">
                    {notes.map(note => <li className="note-preview-container" style={note.style } key={note.id}><NotePreview note={note}/></li>)}
            </ul>
        </section>
    )
}