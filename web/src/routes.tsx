import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import CreatPoint from "./pages/creatPoint";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/creat-point" component={CreatPoint} />
    </BrowserRouter>
  );
};

export default Routes;
