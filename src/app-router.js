import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from 'react';
import App from './App';
import CryptoDetail from './components/crypto-detail';



class AppRouter extends Component {
  render() {
    return (
      <Router >
          <div className="router">
              <Route exact path="/crypto/:name" component={CryptoDetail}/>
             <Route exact path="/" component={App}/>
          </div>
      </Router>
    );
  }
}

export default AppRouter;