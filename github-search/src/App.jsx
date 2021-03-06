import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { UserProvider } from './Context/UserContext'
import { Nav } from './Components/Nav';
import Home from './Views/Home';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <UserProvider>
            <Home />
          </UserProvider>
        </Route>

        <Route path="/detalles">
          <UserProvider>
            <Nav />
          </UserProvider>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
