import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Figlesiadehermanosferrol%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
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
