import { useState } from "react";
import { useEffect } from "react";
export default function FetchComponent(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    fetchData(url);
  }, [url]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
    </>
  );
}
