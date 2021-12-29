export function NoteImg({ note }) {
    
    return (
            <div style={note.style }>
                <h3>{note.info.title}</h3>
                <img src={`${note.info.url}`} alt=""/>
            </div>
    )
}