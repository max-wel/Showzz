import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ModalContainer } from "react-router-modal";
import Navbar from "./components/Navbar/Navbar";
import Home from "./container/Home/Home";
import ShowDetails from "./components/ShowDetails/ShowDetails";
import SavedShows from "./components/SavedShows/SavedShows";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          paddingRight: "1rem",
          paddingLeft: "1rem"
        }}
      >
        <Switch>
          <Route path="/movie/:id" component={ShowDetails} />
          <ProtectedRoute path="/movies/saved" component={SavedShows} />
          {/* <Route path="/movies/saved" component={SavedMovies} /> */}
          <Route path="/movies/:category" component={Home} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/movies/popular" from="/" />
        </Switch>
      </div>
      <ModalContainer />
    </>
  );
}

export default App;
