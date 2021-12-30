const { Link } = ReactRouterDOM

export function SideBar({ onNewMail }) {


    return (
        <div className="sidebar" >
            <article className="sidebar-head">
                <h4>SideBar</h4>
                <button onClick={() => onNewMail()} >Compose</button>
            </article>
        </div>
    )
}