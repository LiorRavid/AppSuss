import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails, onRemoveMail }) {
    // no mails for show
    if (!mails.length) return <h1 className = 'no-mails'>There are no mails to show</h1>
    
    return (
        <section className="mail-list">
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} className = "mail-preview" onRemoveMail= {onRemoveMail} />)}
        </section>
    )
}