export function NoteTxt({ note }) {
    
    return (
            <div>
                <h3>{note.info.title}</h3>
                <p>{note.info.txt}</p>
            </div>
    )
}