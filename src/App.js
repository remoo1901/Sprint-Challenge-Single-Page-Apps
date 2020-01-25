import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <Link className="" exact to="/">
        Home
      </Link>
      <Link className="" exact to="/Character">
        Characters 
      </Link>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/Character" component={CharacterList} />
    </main>
  );
}
