import { useState, useEffect } from "react"
import axios from "axios"

//components
import PokemonList from './components/PokemonList.jsx'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  
  useEffect(() => {
    let cancel;
    setLoading(true)
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c))
      })
      .then((res) => {
        setPokemon(res.data.results.map((p) => p.name))
        console.log(res.data.results.map((p) => p.name))
        setLoading(false)
      })
      .catch((erorr) => {
        console.log(erorr)
        setLoading(false)
      })
      return () => {
        // cancel();
      }
  }, [currentPageUrl])
  if (loading) return "Loading..";

  return (
    <div>
      <PokemonList pokemon={pokemon} />
    </div>

  )
}

export default App
