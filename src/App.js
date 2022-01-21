import './App.css';
import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Routing Example</h1>
        <p>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/about">About</Link>
          {" | "}
          <Link to="/1">Info</Link>
        </p>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/:id">
            <Info />
          </Route>
          <Route exact path="/:id/:textColor">
            <Info />
          </Route>
          <Route exact path="/:id/:textColor/:bgColor">
            <Info />
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
