import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../containers/PrivateRoute';
import NavbarContainer from '../../containers/NavbarContainers';
import Home from '../pages/home';
import NewsContainers from '../../containers/NewsContainer';
import ProfileContainers from '../../containers/ProfileContainer';
import LoginContainer from '../../containers/LoginContainer';
import NotFound from '../pages/notFound';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>App Page</h1>
      <NavbarContainer />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/news" component={NewsContainers} />
        <PrivateRoute path="/profile" component={ProfileContainers} />
        <Route path="/login" component={LoginContainer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
