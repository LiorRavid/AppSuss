
import { NotePreview } from './NotePreview.jsx'


const { Link, Route } = ReactRouterDOM

export class NoteList extends React.Component {

    state = {
        colors: [
            '#ffffff', '#fff475', '#fbbc04', '#f28b82', '#aecbfa',
            '#cbf0f8', '#a7ffeb', '#ccff90', '#e8eaed', '#e6c9a8', '#fdcfe8', '#d7aefb'
        ],
    }

    render(){
        const{notes,remove,onUpdateColor,onCopyNote} = this.props
        const{colors} = this.state
    
    return (
        <section className="note-list">
            <ul className="note-list-ul clean-list ">
                    {notes.map((note) =>{
                        return (
                        <li className="note-preview-container" style={note.style} key={note.id}>
                            <button className="btn-note-pin btn-note"></button>
                            <NotePreview note={note}/>
                            <section className="flex">
                                <button className="btn-note-delete btn-note" title="Delete Note" onClick = {()=> remove(note.id)}></button>
                                <div className="btn-note-color btn-note"><span></span>
                                    <div className="color-dropdown flex" >
                                        {colors.map((color,idx)=> {return <div onClick ={()=>onUpdateColor(note.id,color)} style={{backgroundColor: color}} key={color}></div>})}
                                    </div>
                                </div>
                                <button className="btn-note-copy btn-note" title="Copy Note" onClick={()=>onCopyNote(note)}></button>
                                <Link to={`/keep/${note.id}`}><button className="btn-note-edit btn-note" title="Edit Note"></button></Link>
                                {/* <button className="btn-note-mail btn-note"></button> */}
                            </section>
                        </li>)}
                    )
                    }
            </ul>
        </section>
        )
    }
}

