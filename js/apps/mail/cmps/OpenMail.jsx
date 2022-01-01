import { MailService } from '../services/mail.service.js'
import { SideBar } from './SideBar.jsx'
export class OpenMail extends React.Component {

    state = {
        mail: null,
    }

    componentDidMount() {
        MailService.getEmailById(this.props.match.params.mailId).then((mail) => {

            this.setState({ mail })
        })
    }

    onRemoveMail = (id) => {
        console.log('id',id)
        MailService.removeMail(id).then(() => {
            this.props.history.push('/mail')

        });
    };

    ifBodyNull =(body) => {
        console.log('hi')
        if (body=false){
            return 'No mail content'
        }
        else{
            return body
        }
    }


    render() {
        if (!this.state.mail) return <React.Fragment />
        return (

            <div className='mail-app'>
                <SideBar /> 

                <div className='open-mail-main'>
                    <button onClick={() => this.props.history.push('/mail')} className='btn-back-openmail'></button>
                    <button onClick={() => this.onRemoveMail(this.state.mail.id)} className='btn-delete-open'></button>
                    <div className='open-mail-head'>
                        <p className='from-name'> <span className = 'span-grey'>from: </span>{this.state.mail.from}</p>
                        <p className='from-mail'>{'<'}{this.state.mail.sender}{'>'}</p>
                    </div>
                    <div className='open-mail-subject'>
                    <span className = 'span-grey'>subject: </span>{this.state.mail.subject}
                    </div>
                    <div className='open-mail-body'>
                    <span className = 'span-grey'></span>{this.state.mail.body}
                    </div>

                </div>
            </div>
        )



    }
}