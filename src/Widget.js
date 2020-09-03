import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.w3schools.com"
        frameBorder="0"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowtransparency="true"
        allow="encrypted-media"
        title="Lagum"
      ></iframe>
    </div>
  );
}

export default Widget;
