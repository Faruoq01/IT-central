import './App.scss';
import Login from './screens/Login';
import Home from './screens/Home';
import Management from './screens/Management';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/management' component={Management}/>
          <Route render = {() => <h1>404 page not found</h1>} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
