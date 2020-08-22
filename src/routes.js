import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import pages
import Home from './pages/Home/home'

export default function Routes(props) {

    //Adding route-path to components
    const routes = [
        {
            path: '/',
            component: Home
        }
    ]

    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return <Route exact key={index}
                        path={route.path} component={route.component} />
                })}
                <Route component={Home} />
            </Switch>
        </Router>
    )
}
