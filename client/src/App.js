import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Sidenav from "./components/Sidenav";
import Areachart from "./components/Areachart";
import Chart from "./components/Chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="chart" element={<Chart />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Areachart/> */}
      {/* <Chart/> */}
      {/* <Sidenav/> */}
    </>
  );
}

export default App;
