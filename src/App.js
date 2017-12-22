import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { render } from 'react-dom'
import { Link, Switch, Route } from 'react-router-dom'
import { Home, About, Work, Contact, NoMatch } from "./components"

class App extends Component {

  componentDidMount() {
    //document.body.className='';
  }

  render() {
    return (
      <div>
        <h1>Yugaank Sharma</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/work" component={Work}/>
          <Route exact path="/contact" component={Contact}/>
          <Route path="*" component={NoMatch}/>
        </Switch>
        
      </div>

    );
  }
}

export default App;
