import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from './components/Home';
import Player from './components/Player';
import { Signup } from './components/Signup';
import {Login } from './components/Login'
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    
    <Router>
      <AuthProvider>
      <Switch>
          <Route path="/signup" component={Signup}></Route>
          <Route  path="/login" component={Login}></Route>
        <PrivateRoute  exact path="/" component={Home} />
        <PrivateRoute  path="/player/:id" component={Player} />
        </Switch>
        </AuthProvider>
      </Router>
      
  );
}

export default App;
