import React, { useEffect, useState } from "react";
import Show from "../Show/Show";

const Shows = ({ shows }) => {
  console.log("In Shows shows", shows);
  return (
    <>
      <div className="container-fluid" style={{ cursor: "pointer" }}>
        <div className="row">
          {shows.map(show => {
            return (
              <div key={show.id} className="col-md-6 col-lg-4 mt-4">
                <Show show={show} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shows;
