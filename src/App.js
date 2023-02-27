import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import CardDetail from "./component/CardDetail";
import "./index.css";

function App() {
  ///////////////////////////useState/////////////////////////

  /* useState returns an array with exactly two values:
  1.The current state. During the first render, it will match the initialState you have passed.
  2.The set function that lets you update the state to a different value and trigger a re-render.
  */
  //const [state, setState] = useState(initialState)
  /*how we use useState : 
  step1: ask yourself where you want to change.thats the place where you will use an event called eventHandler.
  step2:write a useState.
  step3:change your state by your setState in eventHandler.
  */
  //"light" is our css
  const [theme, setTheme] = useState("light");
  function themeHandler() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    //initial value of theme is light(line 23).so we gave a class to whole pages (because theme isnt an event we pass it to a className . className is not props)
    <div className={theme}>
      {/* onClick is a functoin passed as props.
      now we will pass our theme as props
      */}
      <Header theme={theme} onClick={themeHandler} />
      {/* Whenever the location changes, <Routes> looks through all its child routes to find the best match and renders that branch of the UI.
        <Route> elements may be nested to indicate nested UI, which also correspond to nested URL paths.
        path is the path pattern to match against the URL to determine if this route matches a URL
        element is the element to render when the route matches the URL. */}
      <Routes>
        {/*
         The element to render when the route matches the URL. */}
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/country/:name" element={<CardDetail theme={theme} />} />
      </Routes>
    </div>
  );
}
export default App;
