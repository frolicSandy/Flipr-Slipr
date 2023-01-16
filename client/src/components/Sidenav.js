import React from "react";
import "../assets/css/Sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import {func} from "./Home"
import { Link } from "react-router-dom";


function showMenu() {
  // console.log("Classs = " + `${styles1.back_menu}`);
  var menu = document.getElementById("navcont");
  console.log(menu);
  menu.style.visibility = "visible";
}
function closeMenu() {
  var menu = document.getElementById("navcont");
  console.log(menu);
  menu.style.visibility = "hidden";
}
// function func(params) {
//   const k=params;

// }
function Sidenav({func}) {
  return (
    <div>
      <div className="hamburg" onClick={showMenu}>
        <FontAwesomeIcon icon={solid("bars")} />
      </div>
      <div className="sidenav" id="navcont">
        <div className="snCont1 snContent">
          <p>Available Stocks</p>
          <div className="cross" onClick={closeMenu}>
            {/* <i class="fas fa-regular fa-xmark"></i> */}
            <FontAwesomeIcon icon={solid("xmark")} />
          </div>
        </div>
        <div className="snCont2 snContent">
          <Link onClick={(event) => func(event, "Nifty")} to="/">Nifty/Sensex</Link>
          <Link onClick={(event) => func(event, "Reliance")} to="/">Reliance</Link>
          <Link onClick={(event) =>func(event,"Ashokley")} to="/">Ashok Leyland</Link>
          <Link onClick={(event) =>func(event,"Cipla")} to="/">Cipla</Link>
          <Link onClick={(event) =>func(event,"Tatasteel")} to="/">Tata Steel</Link>
          <Link onClick={(event) =>func(event,"Eichermot")} to="/">Eicher Motors</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
