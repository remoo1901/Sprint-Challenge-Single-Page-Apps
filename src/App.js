import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import styled from "styled-components";
import "./index.css";

const Main = styled.main`
  background-color: black;
`;

const Nav = styled.nav`
  margin-left: 400px;
  text-decoration: none;
  margin-bottom: 10px;
`;

export default function App() {
  return (
    <Main>
      <Header />
      <SearchForm />
      <Nav>
        <Link className="home-link" exact to="/">
          Home
        </Link>

        <Link className="char-link" exact to="/CharacterList">
          Characters
        </Link>
      </Nav>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/CharacterList" component={CharacterList} />
    </Main>
  );
}
