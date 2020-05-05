import React from 'react';
import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import {BrowserRouter as Router,
      Switch,
      Route} from 'react-router-dom'
import './App.css';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  return (
    <Router>
      <div >
          <Navbar/>
          <Route exact path='/' component={Landing}/>
          <section className='container'>
            <Switch>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/Login' component={Login} />
            </Switch>

          </section>
      </div>
    </Router>
  );
}

export default App;
