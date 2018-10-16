import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import SavedArticles from './pages/SavedArticles/SavedArticles';
import './App.css';

const App = () =>
  <Router>
    <div id="main-div">
      <Nav />
      <div id="inner-div">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Home} />
        <Route exact path="/saved" component={SavedArticles} />
      </Switch>
      </div>
    </div>
  </Router>;

export default App;