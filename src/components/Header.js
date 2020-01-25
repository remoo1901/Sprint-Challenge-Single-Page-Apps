import React from "react";
import styled from "styled-components"

const H1 = styled.h1 `
text-shadow: 1px 1px 2px red, 0 0 1em orange, 0 0 0.2em orange;
`

export default function Header() {
  return (
    <header className="ui centered">
      <H1 className="ui center">Rick &amp; Morty Fan Page</H1>
    </header>
  );
}
