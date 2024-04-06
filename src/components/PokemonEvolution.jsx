import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./PokemonEvolution.css"


function PokemonEvolution({ id }) {
    const [nameEvolution, setNameEvolution] = useState("");
    const [evolutionData, setEvolutionData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const evolutionResponse = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
                const species = evolutionResponse.data.chain?.evolves_to[0]?.species?.name;

                if (species) {
                    const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${species}`);
                    setEvolutionData(pokemonResponse.data);
                    setNameEvolution(species);
                } else {
                    setNameEvolution("No evolution data available");
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <div className="loader"></div>;
    if (error) return <div>Error fetching data: {error}</div>;
    if (!evolutionData) return <div>No evolution data available</div>;

    const tableContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    };
    return (
        <div>
            <h3>Pokemon Evolution</h3>
            <div style={tableContainerStyle}>
                <table style={{ width: "60%" }}>
                    <tbody>
                        <tr>
                            <td>{nameEvolution}</td>
                            <td> <img src={evolutionData.sprites.front_default} alt="" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PokemonEvolution;
