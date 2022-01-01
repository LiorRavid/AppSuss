const { Link } = ReactRouterDOM

export function SideBar({ onNewMail }) {


    return (
        <div className="sidebar" >
            <article className="sidebar-head">
                <button className = 'btn-compose' onClick={() => onNewMail()} > Compose</button>
            </article>
        </div>
    )
}