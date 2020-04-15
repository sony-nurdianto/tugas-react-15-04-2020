import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Tugas/Data'
import Home from './Tugas/Home';
import  Nav  from './Tugas/Nav';




function App() {
  return (
    <Router>
          <Nav/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route  path='/Data' component={Data}></Route>
        </Switch>
    </Router>
  );
}

export default App;
