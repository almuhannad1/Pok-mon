import { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonCard({ url }) {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setInfo(response.data);
                console.log(response)
            })
            .catch((error) => {
                console.error('Error fetching Pokemon:', error);
            });
    }, [url]);

    if (!info) return <div class="loader"></div>;
    return (
        <div className={`${info.types[0].type.name} thumb-container`}>
            <div className="number"><small>#0{info.id}</small></div>
            <img src={info.sprites.front_default} alt={info.name} />
            <div className="detail-wrapper">
                <h3>{info.name}</h3>
                <small>Type: {info.types[0].type.name}</small>
            </div>
        </div>
    );
}

export default PokemonCard;
