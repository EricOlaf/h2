import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "../src/component/Auth/Auth";
import Dashboard from "../src/component/Dashboard/Dashboard";
import Form from "../src/component/Form/Form";
import Post from "../src/component/Post/Post";
import OnePost from "../src/component/Dashboard/OnePost/OnePost";

export default (
  <Switch>
    <Route component={Auth} exact path="/" />
    <Route component={Dashboard} path="/dashboard" />
    <Route component={Form} path="/new" />
    <Route component={Post} path="/post/:postid" />
    <Route component={OnePost} path="/onepost" />
  </Switch>
);
