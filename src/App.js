import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
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
      
    </main>
  );
}
