export function NoteTxt({ note }) {
    
    return (
            <div style={note.style }>
                <h3>{note.info.title}</h3>
                <p>{note.info.txt}</p>
            </div>
    )
}