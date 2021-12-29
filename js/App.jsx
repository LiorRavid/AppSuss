// import { Home } from './pages/Home.jsx'
// import { About } from './pages/About.jsx'
// import { CarApp } from './pages/CarApp.jsx'
// import { CarDetails } from './pages/CarDetails.jsx'
// import { CarEdit } from './pages/CarEdit.jsx'

// import { UserMsg } from './cmps/UserMsg.jsx'
// import { AppHeader } from './cmps/AppHeader.jsx'
// import { AppFooter } from './cmps/AppFooter.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM



export function App() {

  return (
    <Router >
      <section className="app" >
        <AppHeader />
        <main>
          <Switch>
            <Route component={CarEdit} path="/car/edit/:carId?" />
            <Route component={CarDetails} path="/car/:carId" />
            <Route component={CarApp} path="/car" />
            <Route component={About} path="/about" />
            <Route component={Home} path="/" />
          </Switch>
        </main>
      </section>
      {/* <AppFooter /> */}
      <UserMsg />
    </Router>
  );
}
