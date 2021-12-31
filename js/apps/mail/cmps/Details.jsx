export function Details( {show},{mails}) {
    console.log('mail:', mails);
    
    if (!show)
    {
        return null
    }
    else
    {
    return (
        <div className="details">
                         
            <h4>{mails.sender}</h4>
            <h4>{mails.body}</h4>
            
        </div>
       ) 
    }
    
}