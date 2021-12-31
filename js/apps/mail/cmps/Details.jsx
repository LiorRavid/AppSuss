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
            <h6 className = 'details-sender'>sender: {mail.sender}</h6>
            <h6 className = 'details-body'>{(defineBodyLength(mail.body, 80))}</h6>
           <Link to={`/mail/${mail.id}`}><button className = 'expand-mail'>open</button></Link>
        </div>
       ) 
    }
    
}