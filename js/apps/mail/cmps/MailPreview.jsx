// const { Link } = ReactRouterDOM

import { Details } from './../cmps/Details.jsx'

export class MailPreview extends React.Component {

    state = {
        isShown: false,
    }


    onShow = () => {
        this.setState({ isShown: !this.state.isShown })

    }

    onHide = () => {
        this.setState({ isShown: false })
    }

    calcDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(this.props.mail.sentAt)
        return monthNames[date.getMonth()] + ' ' + date.getDate()
    }

    defineBodyLength(str, length) {

        if (str.length > length) {
            return (str.substring(0, length) + "...");
        }
        else {
            return str;
        }
    }

    render() {

        const { mail, onRemoveMail } = this.props
        const { isShown } = this.state


        return (
            <div className="clean-link" >
                <article className="mail-preview" onClick={() => this.onShow()}>

                    <h6 className='mail-preview-from'>{mail.from}</h6>
                    <h6 className='mail-preview-subject'>{mail.subject}</h6>
                    <h6 className='mail-preview-body'>{this.defineBodyLength(mail.body, 35)}</h6>
                    <h6 className='mail-preview-date'>{this.calcDate()}</h6>


                </article>
                <article className="mail-buttons">
                    <button className='btn-delete' onClick={() => onRemoveMail(mail.id)} ></button>
                    {/* <button className='button'>mark</button>
                    <button className='button'>star</button> */}
                </article>

                <Details
                    show={isShown}
                    mail={mail}
                    defineBodyLength={this.defineBodyLength}

                />

            </div>
        )

    }


}










//          )
// }