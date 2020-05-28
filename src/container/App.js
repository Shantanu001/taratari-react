import React from 'react';
import {BrowserRouter as Router,Route,Switch}  from "react-router-dom";
import './App.css';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import Category from './Category';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={HomePage}/>
          <Route path='/ItemDetail' component={ItemDetail}/>
          <Route path='/Category' component={Category}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
