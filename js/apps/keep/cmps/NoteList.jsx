
import { NotePreview } from './NotePreview.jsx'

const { Link } = ReactRouterDOM

export function NoteList({ notes,remove }) {
    return (
        <section className="note-list">
            <ul className="note-list-ul clean-list ">
                    {notes.map((note) =>{
                        return (
                        <li className="note-preview-container" style={note.style} key={note.id}>
                            <button className="btn-note-pin btn-note"></button>
                            <NotePreview note={note}/>
                            <section className="flex">
                                <button className="btn-note-delete btn-note" onClick = {()=> remove(note.id)}></button>
                                <div className="btn-note-color btn-note"><span></span>
                                    <div className="color-dropdown flex" ></div>
                                </div>
                                <button className="btn-note-copy btn-note"></button>
                                <Link to="'/keep/'+note.id"><button className="btn-note-edit btn-note"></button></Link>
                                <button className="btn-note-mail btn-note"></button>
                            </section>
                        </li>)}
                    )
                    }
            </ul>
        </section>
    )
}