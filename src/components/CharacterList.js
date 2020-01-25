import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import "./CharacterList.css";

const CharDiv = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 100%;
  margin-top: 15px;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const name = response.data.results.filter(character =>
          character.name.toLowerCase().includes(search.toLowerCase())
        );
        setChar(name);
      })
      .catch(err => console.log(err));
  }, [search]);

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`submit: ${search}`);
  };

  return (
    <section className="character-list">
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <CharDiv>
        {char.map(character => (
          <CharacterCard
            key={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
          />
        ))}
      </CharDiv>
    </section>
  );
}
