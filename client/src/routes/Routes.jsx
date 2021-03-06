import React from "react";
import { useLocation } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { AnimatePresence } from "framer-motion";

import GuestSection from "./../GuestSection/GuestSection";
import Home from "../AuthSection/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import AuthRoute from "./AuthRoute";
import GuestRoute from "./GuestRoute";
import Post from "../AuthSection/components/blog/Post";
import Blog from "../AuthSection/components/blog/Blog";
import Alert from "../AuthSection/components/alert/Alert";

function Routes() {
  const location = useLocation();
  const { user } = useAuth();
  return (
    <div className="container mt-3">
      <Alert />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            {user ? <Home /> : <GuestSection />}
          </Route>
          <GuestRoute exact path="/signIn" component={SignIn} />
          <GuestRoute exact path="/signUp" component={SignUp} />
          <AuthRoute exact path="/compose" component={Post} />
          <AuthRoute exact path="/posts/:id" component={Blog} />
          {/* <AuthRoute exact path="/dashboard" component={Dashboard} />
          <AuthRoute exact path="/edit/:id" component={Edit} />
          <AuthRoute exact path="/author/:authorId" component={ProfileVisit} /> */}
          <Redirect from="*" to="/" />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default Routes;
