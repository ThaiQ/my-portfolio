import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import pages
import Home from './pages/Home/home'
import Contact from './pages/Contact/contact'

export default function Routes(props) {

    const routes = [
        {
            path: '/',
            component: Home
        },
        {
            path: '/contact',
            component: Contact
        }
    ]

    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    console.log(route)
                    return <Route exact key={index}
                        path={route.path} component={route.component} />
                })}
            </Switch>
        </Router>
    )
}
