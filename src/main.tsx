import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import asyncComponent from "./components/util/AsyncComponent";

const AsyncHomePage = asyncComponent(() => import("./pages/home/home-page"));

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route component={AsyncHomePage} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
