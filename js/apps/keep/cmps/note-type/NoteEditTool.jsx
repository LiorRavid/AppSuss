
import { noteService } from '../services/note.service.js'
import {eventBusService} from '../../../services/event-bus.service.js' 


const { Link} = ReactRouterDOM

export class NoteEditTool extends React.Component {

    state = {
        note: null,
            colors: [
                '#ffffff', '#fff475', '#fbbc04', '#f28b82', '#aecbfa',
                '#cbf0f8', '#a7ffeb', '#ccff90', '#e8eaed', '#e6c9a8', '#fdcfe8', '#d7aefb'
            ]
    }

    componentDidMount() {
        const{note} = this.props
        this.setState({note})
    }

    render(){

        const{note,colors} = this.state
        if(!note) return <React.Fragment></React.Fragment>
        const{onRemoveNote,onUpdateColor,copyNote}=this.props
        return (
            <section className="note-edit-tools flex">
                <button className="btn-note-delete btn-note" onClick={()=>onRemoveNote(note.id)}></button>
                <div className="btn-note-color btn-note"><span></span>
                    <div className="color-dropdown flex" >
                        {colors.map((color,idx)=> {return <div onClick ={()=>onUpdateColor(note.id,color)} style={{backgroundColor: color}} key={color}></div>})}
                    </div>
                </div>
                
                <button className="btn-note-copy btn-note"></button>
            </section>
        )
    }

}