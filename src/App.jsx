import { useState, useEffect } from "react"
import axios from "axios"

//components
import PokemonList from './components/PokemonList.jsx'
import Pagination from "./components/Pagination.jsx"

function App() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()

  useEffect(() => {
    let cancel;
    setLoading(true)
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c))
      })
      .then((response) => {
        setPokemon(response.data.results.map((p) => p.name))
        setLoading(false)
        setNextPageUrl(response.data.next)
        setPrevPageUrl(response.data.previous)
      })
      .catch((erorr) => {
        console.log(erorr)
        setLoading(false)
      })
    return () => {
      cancel();
    }
  }, [currentPageUrl])
  if (loading) return "Loading..";

  // Next Page and Prev Page 
  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }
  // == Next Page and Prev Page ==

  return (
    <div>
      <PokemonList pokemon={pokemon} />
      <Pagination goToNextPage={nextPageUrl ? goToNextPage : null} goToPrevPage={prevPageUrl ? goToPrevPage : null} />
    </div>

  )
}

export default App
