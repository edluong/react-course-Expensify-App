
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is my add expense component
    </div>
)

const EditExpensePage = () => (
    <div>
        This is my edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is my help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404!
    </div>
);

//path prop = what is the endpoint
//component prop = what is the component to show
//exact prop = match the exact route listed in path
//Switch component - loop through all of the Routes that match; last Route will always match because no path
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/> 
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch> 
    </BrowserRouter>
);


ReactDOM.render(routes,document.getElementById('app'));