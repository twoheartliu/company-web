import React from "react";
import Header from "./common";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
