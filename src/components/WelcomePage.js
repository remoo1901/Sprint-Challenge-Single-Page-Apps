import React from "react";
import styled from "styled-components";

const Img = styled.img`
  margin-left: 130px;
  box-shadow: 1px 1px 2px red, 0 0 1em orange, 0 0 0.2em orange;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 600px;
`;

const H1 = styled.h1`
  color: black;
  font-size: 45px;
  text-shadow: 1px 1px 2px red, 0 0 1em orange, 0 0 0.2em orange;
`;

const Section = styled.section`
  background-color: black;

  height: 190%;
`;

export default function WelcomePage() {
  return (
    <Section className="welcome-page">
      <header>
        <H1>Welcome to the ultimate fan site!</H1>
        <Img
          //className="main-img"
          src="https://c4.wallpaperflare.com/wallpaper/436/771/770/rick-and-morty-fan-art-humor-rick-sanchez-wallpaper-preview.jpg"
          alt="rick"
        />
      </header>
    </Section>
  );
}
