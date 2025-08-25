import { useState } from "react";
import { useEffect } from "react";
export default function FetchComponent({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [i, setI] = useState(0); // index for cycling through facts

  async function fetchData(url) {
    setLoading(true);
    setError(null);
    try {
      const data2 = await fetch(url);
      if (!data2.ok) {
        setError(`Failed to fetch data. Status: ${data2.status}`);
      }
      const response = await data2.json();
      setData(response);
    } catch (err) {
      setError(`error fetching data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  function handleClick() {
    setI((prev) => (prev < 6 ? prev + 1 : 0));
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.data && <p className="cat-factbackground">{data.data[i].fact}</p>}

      <button onClick={() => handleClick()}>Next fact... Fact nr: {i}</button>
    </>
  );
}
