import React from "react";
import styled from "styled-components"

const H1 = styled.h1 `
color: rgb(255, 255, 255);
  text-shadow: 0 0 0.5em #87F, 0 0 0.5em #87F, 0 0 0.5em #87F;
font-size: 45px;
`

export default function Header() {
  return (
    <header className="ui centered">
      <H1 className="ui center">Rick &amp; Morty Fan Page</H1>
    </header>
  );
}
