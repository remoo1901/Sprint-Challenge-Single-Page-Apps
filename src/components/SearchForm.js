import React from "react";
import styled from "styled-components";
import "./SearchForm.css"

const Section = styled.section`
  text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em orange;
  font-size: 15px;
`;

export default function SearchForm({search,handleChange}) {
  return (
    <Section className="wrap">
      <form className="search">
        <input className="searchTerm"
          name="search"
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="search"
        />
        <button className="searchButton">Go</button>
      </form>
    </Section>
  );
}
