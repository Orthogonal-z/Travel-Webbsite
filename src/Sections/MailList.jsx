import React from "react";
import "../Sections/MailList.css";

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Get Regular Whatsapp Updates</h1>
      <span className="mailDesc"></span>
      <div className="mailContainer">
        <input className="mailInput" placeholder="आपका Whatsapp नंबर " />
        <button className="mailBtn">Submit</button>
      </div>
    </div>
  );
}

export default MailList;
