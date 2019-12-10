import React from "react";
import googleIcon from "../../assets/icons8-google.svg";
import { socialAuth } from "../../services/authService";

const ModalWrapper = props => {
  const handleSocialAuth = async () => {
    const user = await socialAuth();
    if (user) {
      props.history.push(`/movies/${props.match.params.category}`);
    }
  };

  return (
    <div className="d-flex h-100 justify-content-center align-items-center p-3">
      <div
        className="container px-2 py-4 d-flex justify-content-center flex-column align-items-center"
        style={{ backgroundColor: "white" }}
      >
        <p className="lead">SIGN IN WITH GOOGLE ACCOUNT</p>
        <div
          onClick={handleSocialAuth}
          style={{ pointerEvents: "auto", cursor: "pointer" }}
        >
          <img src={googleIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
