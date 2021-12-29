export function NoteVideo({ note }) {
    
    const embedded = ()=> {
        {
            if (((note.info.url).toLowerCase()).includes('watch')) {
                let idx = note.info.url.indexOf('v=');
                let str = note.info.url.substring(idx + 2);
                console.log('https://www.youtube.com/embed/' + str);
                return 'https://www.youtube.com/embed/' + str;
            }
        }
    }

    return (
        <div>
            <h3>{note.info.title}</h3>
            <iframe width="200" height="150" src={embedded()}></iframe>
        </div>
    )
}