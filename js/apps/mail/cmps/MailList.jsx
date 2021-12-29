import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails }) {
    // no mails for show
    if (!mails.length) return <h1>There are no mails to show</h1>
    return (
        <section className="mail-list">
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
        </section>
    )
}