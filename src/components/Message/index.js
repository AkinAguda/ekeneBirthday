import React from "react";
import Classes from "./Message.module.css";

const Message = ({ name, rel, message, ...props }) => {
  return (
    <div className={Classes.container} {...props}>
      <p className={Classes.content}>{message}</p>
      <h3 className={Classes.name}>{name}</h3>
      <p className={Classes.rel}>{rel}</p>
    </div>
  );
};

export default Message;
