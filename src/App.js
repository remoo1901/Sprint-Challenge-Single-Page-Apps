import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import styled from "styled-components"


const Main = styled.main `
background-color: gray;
`

export default function App() {
  return (
    <Main>
      <Header />
      <SearchForm/>
      <Link className="" exact to="/">
        Home
      </Link>
      <Link className="" exact to="/CharacterList">
        Characters 
      </Link>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/CharacterList" component={CharacterList} />
      
    </Main>
  );
}
