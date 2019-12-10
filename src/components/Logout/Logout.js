import React, { useEffect } from "react";
import { auth } from "../../services/config";

const Logout = ({ history }) => {
  useEffect(() => {
    auth.signOut();
    window.location.href = "movies/popular";
  }, []);

  return null;
};

export default Logout;
