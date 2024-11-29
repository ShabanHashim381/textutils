import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TexTuTiLs - Dark Mode";
      // setInterval(() => {
      //   document.title = "TexTuTiLs is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TexTuTiLs Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TexTuTiLs - light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TexTuTiLs" aboutText="About TexTuTiLs" /> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TexTuTiLs" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TexTuTiLs - Word Counter,Character Counter,Remove Extra Spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>{" "}
      </Router>
    </>
  );
}

export default App;
