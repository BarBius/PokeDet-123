import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            });
    }, [pokemonId]);

    return (
        <section>
            {pokemon && (
                <article>
                    <h1>Pokemon Details:</h1>
                    <p>{pokemon.name}</p>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <li>HP: {pokemon.stats.HP}</li>
            <li>Attack: {pokemon.stats.attack}</li>
            <li>Defense: {pokemon.stats.defense}</li>
            <li>Special Attack: {pokemon.stats.special_attack}</li>
            <li>Special Defense: {pokemon.stats.special_defense}</li>
            <li>Speed: {pokemon.stats.speed}</li>
                </article>
            )}
        </section>
    );
};

export default PokemonDetails;
