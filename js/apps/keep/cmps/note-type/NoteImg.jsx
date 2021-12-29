export function NoteImg({ note }) {
    
    return (
            <div>
                <h3>{note.info.title}</h3>
                <img src={`${note.info.url}`} alt=""/>
            </div>
    )
}