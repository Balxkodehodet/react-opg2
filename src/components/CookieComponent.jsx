import { useState } from "react";
export default function CookieComponent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        <img src="cookie.png" className="cookie" alt="Image of a cookie" />
        count is {count}
      </button>
    </>
  );
}
