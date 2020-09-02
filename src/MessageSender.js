import React from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";

function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            className="messageSender__input"
            type="text"
            placeholder="Post something on the wall"
          />
          <input type="text" placeholder="image URL" />
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
      <div className="messageSender__bottom"></div>
    </div>
  );
}

export default MessageSender;
