
const { Link } = ReactRouterDOM

export class AppHeader extends React.Component {

    state = {
        showMenu: false,
        header:''
    }

    onMainMenu = ()=> {
        this.setState({showMenu: !this.state.showMenu});
    }

    moveLogo= (page)=> {
        this.setState({showMenu: !this.state.showMenu});
        this.setState({header: page});
    }

    render() {
        const{header,showMenu}=this.state
        return (
            <header className='app-header'>
                <section className="app-header-section flex justify-between align-center">
                    <div className="logo" >
                        <span onClick={() => this.moveLogo(' ')}>
                        <Link to="/">APPSUS</Link></span>
                        <div >{header}</div>
                    </div>
                    <div className="btn-main-menu" onClick={this.onMainMenu}></div>
                </section>
<<<<<<< HEAD
                <nav>
                    { showMenu && <ul className="appsus-menu-list clean-list">
=======
                {showMenu && <nav>
                    <ul className="appsus-menu-list clean-list">
>>>>>>> a958578fd1abb00644c9f2ae9a36a8d5d704622e
                        <li  onClick={()=>this.moveLogo('book')}>
                            <Link to="/book"><span className="menu-link-book" ></span><div>Book</div></Link>     
                        </li>
                        <li  onClick={()=>this.moveLogo('keep')}>
                            <Link to="/keep"><span className="menu-link-keep"></span><div>Keep</div></Link>
                        </li>
                        <li  onClick={()=>this.moveLogo('mail')}>
                            <Link  to="/mail"><span className="menu-link-mail"></span><div>Mail</div></Link>
                        </li>
                        <li onClick={()=>this.moveLogo('about')}>
                            <Link   to="/about"><span className="menu-link-about"></span><div>About</div></Link>
                        </li>
                    </ul>
                </nav>}
            </header>
        )
    }
}





