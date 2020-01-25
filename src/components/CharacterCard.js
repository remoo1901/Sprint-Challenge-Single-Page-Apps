import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.image} alt="rick & morty" />
      <h4>{props.name}</h4>
      <h5>{props.status}</h5>
      <h5>{props.species}</h5>
    </div>
  );
}
