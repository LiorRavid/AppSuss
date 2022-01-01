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


    render() {
        if (!this.state.mail) return <React.Fragment />
        return (

            <div className='mail-app'>
                <SideBar />

                <div className='open-mail-main'>
                    <button onClick={() => this.props.history.push('/mail')} className='btn-back-openmail'></button>
                    <div className='open-mail-head'>
                        <p className='from-name'>{this.state.mail.from}</p>
                        <p className='from-mail'>{'<'}{this.state.mail.sender}{'>'}</p>
                    </div>
                    <div className='open-mail-body'></div>
                    <div className='open-mail-'></div>

                </div>
            </div>
        )



    }
}