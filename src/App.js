import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommentApp from "./pages/CommentApp";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/comment">
            <CommentApp />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
