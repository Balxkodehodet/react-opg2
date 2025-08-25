import { useState } from "react";
import { useEffect } from "react";
export default function FetchComponent({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [i, setI] = useState(0); // index for cycling through facts
  const [page, setPage] = useState(1);

  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const data2 = await fetch(url + `&page=${page}`);
      if (!data2.ok) {
        setError(`Failed to fetch data. Status: ${data2.status}`);
        return;
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
    setI((prev) => (prev < 4 ? prev + 1 : 0));
  }
  useEffect(() => {
    setI(0);
    fetchData();
  }, [url, page]);

  if (i === 4) {
    console.log("i = 4 resetting to 0");
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.data && <p className="cat-factbackground">{data.data[i].fact}</p>}
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Next fact... Fact nr: {i}
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next page</button>
      <p>Page: {page}</p>
    </>
  );
}
