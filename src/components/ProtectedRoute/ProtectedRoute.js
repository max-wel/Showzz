import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../../services/config";

let currentUser;
auth.onAuthStateChanged(user => (currentUser = user));

const ProtectedRoute = ({ path, component: Component, render }) => {
  return (
    <Route
      path={path}
      render={props => {
        if (!currentUser) {
          return <Redirect to="/movie/popular/auth" />;
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
