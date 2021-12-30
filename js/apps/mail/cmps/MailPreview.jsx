const { Link } = ReactRouterDOM

export function MailPreview({ mail, onRemoveMail}) {
    const calcDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(mail.sentAt)
        return monthNames[date.getMonth()] + ' ' + date.getDate()


    }
    return (
        <div className="clean-link" >
            <article className="mail-preview">
                <h4>{mail.from}</h4>
                <h4>{mail.subject}</h4>
                <h4>{mail.body}</h4>
                <h4>{calcDate()}</h4>


            </article>
            <article className="mail-buttons">
                <button className='button' onClick = {()=>onRemoveMail(mail.id)} >delete</button>
                <button className='button'>view</button>
                <button className='button'>star</button>
            </article>
        </div>
    )
}