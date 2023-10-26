import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import db from './firebase-config';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"/>
        </Switch>
      </div>
    </Router>
  );
};

export default App