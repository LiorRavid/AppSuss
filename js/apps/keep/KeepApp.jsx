import { MailApp } from './pages/MailApp.jsx'
import { KeepApp} from './pages/KeepApp.jsx'


import { UserMsg } from './cmps/UserMsg.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM



export function App() {

    return (
        <Router >
            <section className="app" >
                <AppHeader />
                <main>
                    <Switch>
                        <Route component={KeepApp} path="/Keep" />
                        <Route component={MailApp} path="/mail" />
                        <Route component={About} path="/about" />
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
                <AppFooter />
            </section>
            <UserMsg />
        </Router>
    );
}