const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    return (
        <Link className="clean-link" to={`/mail/${mail.id}`}>
            <article className="mail-preview">
                <h4>Vendor: {car.vendor}</h4>
                <h4>Speed: {car.speed}</h4>
            </article>
        </Link>
    )
}