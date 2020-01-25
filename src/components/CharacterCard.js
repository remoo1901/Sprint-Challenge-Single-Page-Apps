import React from "react";
import styled from "styled-components";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const Wrapper = styled.div`
  background-color: white;
  max-width: 350px;
  box-shadow: 0 2px 6px 0 white, 0 2px 10px 0 white;
  margin-bottom: 12px;
`;

export default function CharacterCard(props) {
  return (
    <Wrapper>
      <Card>
        <CardImg src={props.image} alt="rick & morty" />
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <p>Status: {props.status}</p>
          <p>Species: {props.species}</p>
        </CardBody>
      </Card>
    </Wrapper>
  );
}
