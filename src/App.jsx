import { useState } from "react";
import "./App.css";
import CookieComponent from "./components/CookieComponent.jsx";
import UsersComponent from "./components/UsersComponent.jsx";
import FetchComponent from "./components/FetchComponent.jsx";

function App() {
  const url = "https://catfact.ninja/facts?limit=5";
  return (
    <>
      <FetchComponent url={url} />
      <CookieComponent />
      <UsersComponent />
    </>
  );
}

export default App;
