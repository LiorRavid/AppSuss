import { NoteImg } from './NoteImg.jsx'
import { NoteTodos} from './NoteTodos.jsx'
import { NoteTxt } from './NoteTxt.jsx'
import { NoteVideo} from './NoteVideo.jsx'



export function DynamicCmp(props) {
    switch (props.type) {
        case 'note-img':
            return <NoteImg {...props} />
        case 'note-todos':
            return <NoteTodos {...props} />
        case 'note-txt':
            return < NoteTxt {...props} />
        case 'note-video':
            return <NoteVideo {...props} />
        default:
            return <React.Fragment></React.Fragment>
    }
}
