import React from "react";
import "../Sections/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderContainer from "./HeaderContainer";
import {
  faCalendarDays,
  faHotel,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

function Header() {
  const [openDate, setOpenDate] = useState(false);

  const [selectPerson, setSelectPerson] = useState(false);
  const [person, setPerson] = useState({
    adults: 1,
  });

  const handleClick = (name, operation) => {
    setPerson((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? person[name] + 1 : person[name] - 1,
      };
    });
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="Header">
      <div className="headerContainer">
        <HeaderContainer />
        <h1 className="headerTitle">Kedarnath/Badrinath/Tungnath/Auli</h1>
        <h2 className="headerTitle2">Book a Cab or Hotel from your comfort</h2>

        <div className="h3">
          <p className="h3Text">Free One Time Meal</p>
          <p className="h3Text">Free Tea and Coffee</p>
          <p className="h3Text">No Charge On Cancellation</p>
          <p className="h3Text">River Rafting - Horse Riding</p>
          <p className="h3Text">Rock - Climbing</p>
        </div>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faHotel} className="headerIcon" />
            <input
              className="headerSearchInput"
              type="text"
              placeholder="Where are you going ?"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchItem"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )} `}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                className="date"
                ranges={date}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setSelectPerson(!selectPerson)}
              className="headersearchText"
            >{`Select Persons: ${person.adults}`}</span>
            {selectPerson && (
              <div className="options">
                <div className="optionItems">
                  <span className="optionText">Persons</span>
                  <button
                    disabled={person.adults <= 1}
                    onClick={() => handleClick("adults", "d")}
                    className="optionCounterButton"
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{person.adults}</span>
                  <button
                    onClick={() => handleClick("adults", "i")}
                    className="optionCounterButton"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtnSome">Search Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
