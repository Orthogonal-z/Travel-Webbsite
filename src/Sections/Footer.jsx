import React from "react";
import "../Sections/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Garhwal</li>
          <li className="fListItem">Kumaon</li>
          <li className="fListItem">Tehri</li>
          <li className="fListItem">Pauri</li>
          <li className="fListItem">Chamoli</li>
          <li className="fListItem">Dehradun</li>
        </ul>

        <ul>
          <li className="fListItem">Agastyamuni</li>
          <li className="fListItem">Bhimpul</li>
          <li className="fListItem">Doba</li>
          <li className="fListItem">Nagadeva</li>
          <li className="fListItem">Karnaprayag</li>
          <li className="fListItem">Byasi</li>
        </ul>

        <ul>
          <li className="fListItem">About Us</li>
          <li className="fListItem">Blogs</li>
          <li className="fListItem">Career</li>
          <li className="fListItem">Our Hotels</li>
          <li className="fListItem">Benefits</li>
        </ul>

        <ul>
          <li className="fListItem">Register as a Hotel Owner</li>
          <li className="fListItem">Register as a Taxi Owner</li>
          <li className="fListItem">Register as a Tour Guide</li>
        </ul>
      </div>
      <div className="fText">Copyright @Krudo Holidays 2022</div>
    </div>
  );
}

export default Footer;
