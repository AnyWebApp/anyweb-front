import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home'
import Search from './pages/Search/Search'

import './app.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
          <Link to="/search" className='link'>Search</Link>
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
