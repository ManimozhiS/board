
import React from 'react';
import LineChart from './Components/LineChart'
import BarChart from './Components/BarChart'
import DoughnutChart from './Components/DoughnutChart'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div className="app" style={{backgroundColor:''}}>
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Home />
            <LineChart/>
            <BarChart />
            <DoughnutChart />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
