const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    const calcDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(mail.sentAt)
        return monthNames[date.getMonth()] + ' ' + date.getDate()


    }
    return (
        <div className="clean-link" >
            <article className="mail-preview">
                <h4>{mail.subject}</h4>
                <h4>{mail.body}</h4>
                <h4>{calcDate()}</h4>
            </article>
        </div>
    )
}