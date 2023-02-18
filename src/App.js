import "./index.css";
import Detail from "./component/Detail";
import { useState } from "react";
import "./component/DarkMode.css";
import { Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import Header from "./component/Header";

function App() {
  const [theme, setTheme] = useState("light");
  function themeHandler() {
    console.log(theme);
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div className={theme}>
      <Header theme={theme} onClick={themeHandler} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/country/:name" element={<Detail theme={theme} />} />
      </Routes>
    </div>
  );
}
export default App;
