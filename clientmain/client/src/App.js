import "./App.css";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="App">
        <div className="auth-wrapper" style={{display: window.location.pathname.split("/").pop() === 'home' ? 'none': 'block' }}>
          {/* {window.location.reload()} */}
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<SignUp/>} />
            </Routes>
          </div>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>

      {/* <Areachart/> */}
      {/* <Chart/> */}
      {/* <Sidenav/> */}
    </>
  );
}

export default App;
