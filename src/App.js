import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route path="/carteira" component={ Wallet } />
      <div className="separacao">
        <Route exact path="/" component={ Login } />
      </div>
    </Switch>
  );
}

export default App;
