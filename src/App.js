import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home'
import Search from './pages/Search/Search'

import './app.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
      <ul className='app-ul'>
        <li className='app-li'>
          <Link to="/home" className='link'>Home</Link>
        </li>
        <li className='app-li'>
          <Link to="/search" className='link'>Search</Link>
        </li>
      </ul>
    </Router>
  )
}

export default App;
