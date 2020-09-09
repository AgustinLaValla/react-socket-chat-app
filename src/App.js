import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/join" component={Join} />
        <Route exact path="/chat" component={Chat} />
        <Redirect to="/join"/>
      </Switch>
    </Router>
  )
}

export default App;
