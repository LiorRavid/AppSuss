import { OpenMail } from '../cmps/OpenMail.jsx'
export function Details( {show , mail , defineBodyLength}) {
    const { Link, Route } = ReactRouterDOM

    if (!show)
    {
        return null
    }
    else
    {
    return (
        <div className="details">
            <div className ='details-container'>
            <h6 className = 'details-sender'>sender: {mail.sender}</h6>
           <Link
           mail = {mail}
            to={`/mail/${mail.id}`}><button className = 'btn-full-mail'></button>
            </Link>
            </div>
             <h6 className = 'details-body'>{(defineBodyLength(mail.body, 80))}</h6>
        </div>
       ) 
    }
    
}