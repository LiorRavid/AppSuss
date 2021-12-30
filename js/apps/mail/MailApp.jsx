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
        newMail: false,
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

        this.setState({newMail: true})

        console.log('jaja:', this.state.newMail)

    }
    
    handleSubmit = (form)=> {
        console.log(form)

    }



    render() {
        const { mails } = this.state
        //loader
        if (!mails) return <Loader />
        return (
            <section className='mail-app'>
                {this.state.newMail = true &&
                    <NewMail
                    handleSubmit = {this.handleSubmit}
                    />}
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