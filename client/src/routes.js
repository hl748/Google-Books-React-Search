import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Search from "./search"
import Saved from "./saved"
import Navigation from "./components/navbar"

function Routes () {
    return (
        <Router>

        <Switch>
        <Route exact path='/'>
          <Navigation />
          <Search />
        </Route>
        <Route exact path='/saved'>
          <Navigation />
          
          <Saved />
        </Route>
        </Switch>
        </Router>
    )
}

export default Routes;