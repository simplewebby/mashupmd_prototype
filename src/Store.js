export const [ data, setData ] = useState([]);

useEffect(() => {
  fetch("https://rickandmortyapi.com/api/character/")
    .then((res) => res.json())
    .then((data) => setData(data.results.slice(0, 20)));
}, []);


