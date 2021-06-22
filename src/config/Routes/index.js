import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from '../../components/pages/Login'
import Dashboard from '../../components/pages/Dashboard'
import About from '../../components/pages/About'
  

const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Dashboard/>
                </Route>
                
                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </Router>

    )
}
export default Routes;