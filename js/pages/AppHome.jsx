
const { Link } = ReactRouterDOM

export function AppHome() {
    return (
        <section className="home-page flex-grow">
            <h3>Meet Our New Email Application</h3>
            <h4>Free, Private & Secure</h4>
            <Link to="/mail"><h3 className="home-page-start">Start Here<span className="start-here"></span></h3></Link>
            <h3>Organize Your notes In Our Keep Application</h3>
            <h4>Save your thoughts, wherever you are</h4>
            <Link to='/keep'><h3 className="home-page-start">Start Here<span className="start-here"></span></h3></Link>
        </section>
    )
}




