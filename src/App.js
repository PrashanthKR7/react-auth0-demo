import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Private from './Components/Private';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Profile from './Components/Profile';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/private" component={Private} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </main>
  </div>
)

export default App