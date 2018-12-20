import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Description from "./components/Description/Description";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/description/:id" component={Description} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
