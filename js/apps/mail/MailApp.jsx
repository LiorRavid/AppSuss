const { Link } = ReactRouterDOM
import { Loader } from './cmps/Loader.jsx'
import { MailService } from './services/mail.service.js'
import { MailList } from './cmps/MailList.jsx'
import { SideBar } from './cmps/SideBar.jsx'
export class MailApp extends React.Component {

    state = {
        mails: null,
        filterBy: null,
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

    get mailsToDisplay(){
        const { mails } = this.state
        const ctg = this.ctgSearchParam
        return cars.filter(car => !ctg || car.ctg === ctg)
    }


    render() {
        const { mails } = this.state
        //loader
        if (!mails) return <Loader />
        return (
            <section className='mail-app'>
                <SideBar />
                <MailList mails= {mails}/>

                
                

            </section>
        )




    }
}