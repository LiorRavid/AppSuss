// const { Link } = ReactRouterDOM


import { Details } from '../cmps/Details.jsx'

export class MailPreview extends React.Component {

  state = {
    isShown: false,
  }

  onShow = () => {
    this.setState({ isShown: true})
    console.log(this.state.isShown )
  }

  onHide = () => {
    this.setState({ isShown: false})
  }



 render() {
    const { mail , onRemoveMail,} = this.props
    const { isShown } = this.state
    
        const calcDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(mail.sentAt)
        return monthNames[date.getMonth()] + ' ' + date.getDate()
     }
    return (
        <div className="clean-link" >
            <article className="mail-preview" onClick ={() => this.onShow()}>
                
                <h4>{mail.from}</h4>
                <h4>{mail.subject}</h4>
                <h4>{mail.body}</h4>
                <h4>{calcDate()}</h4>


            </article>
            <article className="mail-buttons">
                <button className='button' onClick={() => onRemoveMail(mail.id)} >delete</button>
                <button className='button'>mark</button>
                <button className='button'>star</button>
            </article>
            
            <Details
              show = {this.isShown}
              mails={mail}
              />
              
        </div>
    )

}
}

 

        




         
         
//          )
// }