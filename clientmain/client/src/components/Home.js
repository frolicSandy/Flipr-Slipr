import React, { useEffect, useState } from "react";
import "react-dropdown/style.css";
import "../assets/css/Home.css";
import Sidenav from "./Sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/** import LoadingScreen from "react-loading-screen";*/
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Chart from "./Chart";
import Areachart from "./Areachart";
import axios from "axios";
/**

// var k;
// export function Optionsk(event, params) {
  //     event.preventDefault()
  //     //  k=params;
  //     //  console.log(k);
  
  // }
  
  */
export default function Home() {
  const [highlightclass1, sethighlightclass1] = useState("highlight");
  const [highlightclass2, sethighlightclass2] = useState("");
  const [highlightclass3, sethighlightclass3] = useState("");
  const [highlightclass4, sethighlightclass4] = useState("");
  const [highlightclass5, sethighlightclass5] = useState("");
  const [highlightclass6, sethighlightclass6] = useState("");
  const [highlightclass7, sethighlightclass7] = useState("");
  const highlightElem1 = () => {
    sethighlightclass1("highlight");
    sethighlightclass2("");
    sethighlightclass3("");
    sethighlightclass4("");
    sethighlightclass5("");
    sethighlightclass6("");
    sethighlightclass7("");
  };
  const highlightElem2 = () => {
    sethighlightclass2("highlight");
    sethighlightclass1("");
    sethighlightclass3("");
    sethighlightclass4("");
    sethighlightclass5("");
    sethighlightclass6("");
    sethighlightclass7("");
  };
  const highlightElem3 = () => {
    sethighlightclass3("highlight");
    sethighlightclass1("");
    sethighlightclass2("");
    sethighlightclass4("");
    sethighlightclass5("");
    sethighlightclass6("");
    sethighlightclass7("");
  };
  const highlightElem4 = () => {
    sethighlightclass4("highlight");
    sethighlightclass1("");
    sethighlightclass3("");
    sethighlightclass2("");
    sethighlightclass5("");
    sethighlightclass6("");
    sethighlightclass7("");
  };
  const highlightElem5 = () => {
    sethighlightclass5("highlight");
    sethighlightclass1("");
    sethighlightclass3("");
    sethighlightclass4("");
    sethighlightclass2("");
    sethighlightclass6("");
    sethighlightclass7("");
  };
  const highlightElem6 = () => {
    sethighlightclass6("highlight");
    sethighlightclass1("");
    sethighlightclass3("");
    sethighlightclass4("");
    sethighlightclass5("");
    sethighlightclass2("");
    sethighlightclass7("");
  };
  const highlightElem7 = () => {
    sethighlightclass7("highlight");
    sethighlightclass1("");
    sethighlightclass3("");
    sethighlightclass4("");
    sethighlightclass5("");
    sethighlightclass6("");
    sethighlightclass2("");
  };
  const [value, setValue] = useState("cipla");
  const [value1, setValue1] = useState("NIFTY 50");
  const [value2, setValue2] = useState("17,972.15");

  const temp = async (e, k) => {
    setLoadingState(true)
    e.preventDefault();
    setValue(k);
    setValue1(k);
    /**console.log(value, " hello");*/
    const dd = await (
      await axios.get("https://fliprslipr.onrender.com/api/stocks/" + value)
    ).data.index;
    const dateclose = dd[dd.length - 1].Open;

    /**console.log("temp");*/

    setValue2(Math.round(dateclose * 100) / 100);
    setLoadingState(false)
    /**console.log(loadingState);*/
  };

  useEffect((e) => {
    /** temp(e, "cipla");*/
    setTimeout(() => {
      setLoadingState(false)
    }, 1000)
      
  }, [])

  let [loadingState, setLoadingState] = useState(true)

  return (
    <>
    {/* <LoadingScreen
      loading={loadingState}
      bgColor="#f1f1f1"
      spinnerColor="#00d09c"
      textColor="#00d09c"
      // logoSrc="/logo.png"
      text="Getting data"
    /> */}
      {/* </LoadingScreen> */}
      <div>
        <Sidenav func={temp} />
        <div className="container1">
          <div className="upr1">
            <div className="dropdown c1">
              <div className="cont1_drpdwn">NSE</div>
              <div className="cont1_drpdwn_content">
                <a href="#">NSE</a>
                <a href="#">BSE</a>
              </div>
            </div>
            <div className="c1 gg">Futures</div>
            <div className="c1">Options</div>
          </div>
          <div className="upr2">
            <p>{value1}</p>
          </div>
          <hr className="line" />
        </div>
        <div className="container2">
          <div className="clmn1 clmn">
            <div className="price">
              <p>{value2}</p>
            </div>
            <div className="pricechange">
              <FontAwesomeIcon icon={solid("caret-up")} />
              <p>113.5(0.65%) </p>
            </div>
            <div className="date">
              <p>As on 13 Jan, 2023 13:25 IST</p>
            </div>
          </div>
          <div className="clmn2 clmn">
            <div className="range1 range">
              <div className="rangename">
                <p>Day Range</p>
              </div>
              <div className="rangetitle">
                <p>17,774.25</p>
                <p>17,774.25</p>
              </div>
              <div className="slider">
                <div className="dot">
                  <p>.</p>
                </div>
                <div className="linegg">
                  <div className="linehead">
                    <p className="redL">L</p>
                    <p className="greenH">H</p>
                  </div>
                  <hr className="sldrline" />
                </div>
              </div>
            </div>
            <div className="range2 range">
              <div className="rangename">
                <p>52 Week Range</p>
              </div>
              <div className="rangetitle">
                <p>17,774.25</p>
                <p>17,774.25</p>
              </div>
              <div className="slider">
                <div className="dot2">
                  <p>.</p>
                </div>
                <div className="linegg">
                  <div className="linehead">
                    <p className="redL">L</p>
                    <p className="greenH">H</p>
                  </div>
                  <hr className="sldrline" />
                </div>
              </div>
            </div>
            <div className="range3 range">
              <div className="rangename">
                <p>Returns</p>
              </div>
              <div className="dropdown c1">
                <div className="cont1_drpdwn mm">
                  YTD &nbsp; &nbsp; &nbsp;
                  <span>
                    <FontAwesomeIcon icon={solid("caret-down")} />
                  </span>
                </div>
                <span className="pp">3.55%</span>{" "}
                <div className="cont1_drpdwn_content">
                  <a href="#">NSE</a>
                  <a href="#">BSE</a>
                </div>
              </div>
            </div>
          </div>
          <div className="clmn3 clmn">
            <Areachart val={value} />
          </div>
        </div>
        <div className="container10">
          <div className="lineTab">
            <hr className="tab" />
          </div>
          {/* <h1>fghjk</h1> */}
          <div className="tableHeader">
            {/* <hr /> */}
            <div
              className="options Overview"
              onClick={highlightElem1}
              id={highlightclass1}
            >
              Overview
            </div>
            <div
              className="options Chart"
              onClick={highlightElem2}
              id={highlightclass2}
            >
              Chart
            </div>
            <div
              className="options Technicals"
              onClick={highlightElem3}
              id={highlightclass3}
            >
              Technicals
            </div>
            <div
              className="options News"
              onClick={highlightElem4}
              id={highlightclass4}
            >
              News
            </div>
            <div
              className="options Contribution"
              onClick={highlightElem5}
              id={highlightclass5}
            >
              Contribution
            </div>
            <div
              className="options Components"
              onClick={highlightElem6}
              id={highlightclass6}
            >
              Components
            </div>
            <div
              className="options options"
              onClick={highlightElem7}
              id={highlightclass7}
            >
              Forum
            </div>
            {/* <div>Chart</div> */}
          </div>
          <div className="lineTab">
            <hr className="tab" />
          </div>
          <div className="columnCont">
            <div className="column1">
              <div className="rowElem">
                <div className="row1">
                  <p className="title">Open</p>
                  <p className="content">124,25,00</p>
                </div>
                <div className="row1">
                  <p className="title">Previous Close</p>
                  <p>124,25,00</p>
                </div>
                <div className="row1">
                  <p className="title">Day High</p>
                  <p>124,25,00</p>
                </div>
              </div>
            </div>
            <div className="column2">
              <div className="rowElem">
                <div className="row1">
                  <p className="title">Open</p>
                  <p className="val">124,25,00</p>
                </div>
                <div className="row1">
                  <p className="title">Previous Close</p>
                  <p>124,25,00</p>
                </div>
                <div className="row1">
                  <p className="title">Day High</p>
                  <p>124,25,00</p>
                </div>
              </div>
            </div>
          </div>
                
        </div>
        <div className="container3">
          <Chart val={value} />
        </div>
      </div>
    {/* </LoadingScreen> */}
    </>
  );
}

// export default {Home,Optionsk};
