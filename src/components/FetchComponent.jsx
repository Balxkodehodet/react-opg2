export default function FetchComponent(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      setLoading(true);
      setError(null);
      try {
        const data = await fetch(url);
        if (!data.ok) {
          setError(`Failed to fetch data. Status: ${data.status}`);
        }
        const response = await data.json();
        setData(response);
      } catch (err) {
        setError(`error fetching data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchData(url);
  }, []);
}
