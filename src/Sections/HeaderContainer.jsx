import React from "react";
import "../Sections/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faSignsPost,
  faToriiGate,
} from "@fortawesome/free-solid-svg-icons";

function HeaderContainer() {
  return (
    <div>
      <div className="headerList">
        <div className="headerListItem active">
          <FontAwesomeIcon icon={faSignsPost} />
          <span>Guide</span>
        </div>

        <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
        </div>

        <div className="headerListItem">
          <FontAwesomeIcon icon={faToriiGate} />
          <span>Attractions</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderContainer;
