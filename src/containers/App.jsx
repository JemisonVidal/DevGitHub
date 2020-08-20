import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import Home from '../pages/home/Home';

import './App.css'

const App = () => (
  <BrowserRouter>
    <StoreProvider>
      <div className="app">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </StoreProvider>
  </BrowserRouter >
)

export default App;
