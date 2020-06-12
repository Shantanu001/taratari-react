import React from 'react';
import {BrowserRouter as Router,Route,Switch}  from "react-router-dom";
import './App.css';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import Category from './Category';
import ItemDetail from './ItemDetail';
import Form1 from './Form1';  
import Form2 from './Form2'; 
import Form3 from './Form3'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={HomePage}/>
          <Route path='/ItemDetail' component={ItemDetail}/>
          <Route path='/Category' component={Category}/>
          <Route path='/form1' component={Form1}/>
          <Route path='/form2' component={Form2}/>
          <Route path='/form3' component={Form3}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
