import { useState } from "react";
import Button from "../../components/button/Button";
import buttonStyles from "../../components/button/Button.module.css";
import styles from "./ApiExample.module.css";

function ApiExample() {
  const [pokemon, setPokemon] = useState<{
    name: string;
    image: string;
  } | null>(null);

  function fetchPokemon() {
    const id = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
        });
      });
  }

  return (
    <div className="page">
      <h1 className={styles.title}>Fetching an API</h1>
      <p className={styles.subtitle}>
        A quick example of how to fetch data from an API in React.
      </p>

      <div className={styles.content}>
        <div className={styles.steps}>
          <h2>How it works</h2>
          <ol>
            <li>
              <strong>Pick an API</strong>: find a public API you want to use, like{" "}
              <code>https://pokeapi.co/api/v2/pokemon/1</code>
            </li>
            <li>
              <strong>Call fetch</strong>: use <code>fetch(url)</code> to make a
              request to that API endpoint.
            </li>
            <li>
              <strong>Parse the response</strong>: the response comes back as raw
              data, so call <code>.then(res =&gt; res.json())</code> to convert it
              into a JavaScript object.
            </li>
            <li>
              <strong>Use the data</strong>: pull out the fields you need from the
              response and display them on the page.
            </li>
          </ol>
        </div>

        <div className={styles.demo}>
          <h2>Try it out</h2>
          <div className={styles.preview}>
            {pokemon ? (
              <>
                <img src={pokemon.image} alt={pokemon.name} />
                <p className={styles.pokemonName}>{pokemon.name}</p>
              </>
            ) : (
              <p className={styles.placeholder}>Press the button to fetch a Pokemon!</p>
            )}
          </div>
          <button className={buttonStyles.button} onClick={fetchPokemon}>
            Fetch Pokemon
          </button>
        </div>
      </div>

      <div className={styles.centered}>
        <Button text="Back to Home" to="/" />
      </div>

    </div>
  );
}

export default ApiExample;
