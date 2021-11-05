import Home from "./Page/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Abum from "./Page/Abum";
import Foryou from "./Page/Foryou";

function App() {
  return (
    <>
     <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/abum">
            <Abum />
          </Route>
          <Route path="/foryou">
            <Foryou />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
