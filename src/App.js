// Jinny Choi
// Movie App 2019
// Nomad Coders ReactJS로 영화 웹 서비스 만들기

import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <>
    <h1>hello</h1>
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
    </>
  );
}

export default App;
