import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Headerpage from "./Component/Headerpage";
import route from './Component/RouteConfig';
import Footer from './Component/Footer';

function chay(route) {
  const result = route.map((rout, index) => {
    return (
      <Route
        key={index}
        path={rout.path}
        exact={rout.exact}
        component={rout.main}
      />
    );
  });
  return result;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Headerpage />
        <Switch>
          {
            chay(route)
          }
        </Switch>
        <Footer />
      </div >
    </Router>
  );
}

export default App;
