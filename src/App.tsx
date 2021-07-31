import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Services from './modules/services/Services';
import Subscribed from './modules/subscribed/Subscribed';


function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Services} />
          <Route exact path="/subscribed" component={Subscribed} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
