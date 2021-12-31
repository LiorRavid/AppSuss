import { AppHome } from './js/pages/AppHome.jsx'
import { AppAbout } from './js/pages/AppAbout.jsx'
import { MailApp } from './js/apps/mail/MailApp.jsx'
import { OpenMail } from './js/apps/mail/cmps/OpenMail.jsx'
// import { MailDetails } from './pages/MailDetails.jsx'
// import { MailEdit } from './pages/MailEdit.jsx'
import { KeepApp } from './js/apps/keep/KeepApp.jsx'
// import { NoteDetails } from './pages/NoteDetails.jsx'
// import { NoteEdit } from './js/apps/keep/cmps/NoteEdit.jsx'

import { UserMsg } from './js/cmps/UserMsg.jsx'
import { AppHeader } from './js/cmps/AppHeader.jsx'
import { AppFooter } from './js/cmps/AppFooter.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM



export function App() {

    return (
        <Router >
            <section className="main-app-container" >
                <AppHeader />
                <main className="app-main-layout flex-grow">
                    <Switch>
                        {/* <Route component={NoteEdit} path="keep/edit/:noteId"/> */}
                        {/* <Route component={NoteDetails} path="/keep/note/:noteId" /> } */}
                        <Route component={KeepApp} path="/keep" />
                        <Route component={OpenMail} path="/mail/:mailId" />
                        <Route component={MailApp} path="/mail" />
                        <Route component={AppAbout} path="/about" />
                        <Route component={AppHome} path="/" />
                    </Switch>
                </main>
                <AppFooter />
            </section>
            <UserMsg />
        </Router>
    );
}
