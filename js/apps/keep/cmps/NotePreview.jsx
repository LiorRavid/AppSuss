import { DynamicCmp } from './note-type/DynamicCmp.jsx'


export class NotePreview extends React.Component{

    state={
        noteType: this.props.note.type,
        isChecked: null
    }

    render(){
        const{noteType} = this.state
        const{note,onUpdateCheck} = this.props
        return (
                <article className='note-preview'>
                    <DynamicCmp type={noteType} note={note}/>
                </article>
        )
    }
}


