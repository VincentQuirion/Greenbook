import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Import components
import App from "./App";
import Profile from "./views/Argon/examples/Profile";
import Search from "./views/Search";
import Login from "./views/Argon/examples/Login"
import Recipe from "./views/Recipe";
// import {Homepage, Profile} from './App';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/profile/" component={Profile}/>
            <Route exact path="/search/" component={Search}/>
            <Route exact path="/Login/" component={Login}/>
            <Route exact path="/Recipe/" component={Recipe}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
