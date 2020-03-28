import React from 'react';
import {Provider} from 'react-redux'
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import store from './store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
        </Switch>

        </Router>
      </div>
    </Provider>
  );
}

export default App;
