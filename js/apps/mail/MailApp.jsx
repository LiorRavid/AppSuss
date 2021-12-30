const { Link } = ReactRouterDOM
import { Loader } from './cmps/Loader.jsx'
import { MailService } from './services/mail.service.js'
import { MailList } from './cmps/MailList.jsx'
import { SideBar } from './cmps/SideBar.jsx'
import { NewMail } from './cmps/NewMail.jsx'
export class MailApp extends React.Component {

    state = {
        mails: null,
        filterBy: null,
        isNewMail: false,
    }

    componentDidMount() {
        this.loadMails()

    }

    loadMails = () => {
        const { filterBy } = this.state;
        MailService.query(filterBy).then((mails) => {
            this.setState({ mails });
        });
    };


    get ctgSearchParam() {
        const urlSearchParams = new URLSearchParams(this.props.location.search)
        return urlSearchParams.get('ctg')
    }

    get mailsToDisplay() {
        const { mails } = this.state
        const ctg = this.ctgSearchParam
        return cars.filter(car => !ctg || car.ctg === ctg)
    }
    onRemoveMail = (id) => {
        MailService.removeMail(id).then(() => {
            //   eventBusService.emit('user-msg', { txt: 'mail is removed!', type: 'danger'})
            this.loadMails()
        });
    };

    onNewMail = () => {


        this.setState({ isNewMail: true });

    }

    handleSubmit = (form) => {
        form.preventDefault()
        this.setState({ isNewMail: false })
        const to = form.target.to.value
        const subject = form.target.subject.value
        const body = form.target.body.value
        MailService.addMail(to, subject, body).then(() => {
            eventBusService.emit('user-msg', { txt: 'add ma to the list!', type: 'success' })
            this.setState({ mails: null })
            
            
          })
          loadMails()
    }




    render() {
        const { mails } = this.state
        //loader
        if (!mails) return <Loader />
        return (
            <section className='mail-app'>

                <NewMail
                    show={this.state.isNewMail}
                    prop={this.handleSubmit}

                />
                <SideBar
                    onNewMail={this.onNewMail}
                />
                <MailList
                    mails={mails}
                    onRemoveMail={this.onRemoveMail}
                />




            </section>
        )

    }
}
