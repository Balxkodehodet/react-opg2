import { useState } from "react";
import "./App.css";
import CookieComponent from "./components/CookieComponent.jsx";
import UsersComponent from "./components/UsersComponent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CookieComponent />
      <UsersComponent />
    </>
  );
}

export default App;
