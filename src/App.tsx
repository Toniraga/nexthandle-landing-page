import React from 'react';
import Services from './components/services/Services';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Services} />
          <Route exact path="/subscribed" component={() => <div>hello</div>} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
