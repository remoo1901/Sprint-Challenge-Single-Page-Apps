import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => setChar(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="character-list">
      <div>
        {char.map(character => (
          <CharacterCard
            key={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
          />
        ))}
      </div>
    </section>
  );
}
