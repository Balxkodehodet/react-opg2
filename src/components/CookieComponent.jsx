import { useState } from "react";
export default function CookieComponent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button className="btnCookie" onClick={() => setCount(count + 1)}>
        <img
          src="cookie.png"
          className="cookie"
          alt="Image of a cookie with chocolate bits in it"
        />
        <p> points : {count} </p>
      </button>
    </>
  );
}
