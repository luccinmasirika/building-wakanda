import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Menu } from './components/menu';
import { Home } from './containers/home';
import { NotFound } from './containers/notFound';

const Routes: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
