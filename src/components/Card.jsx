import React from "react";

const Card = ({ career, name, genre }) => {
  return (
    <div className="card">
      <h4>Se guardaron lo siguientes datos sobre ti:</h4>
      <p>Nombre: {name}</p>
      <p>Carrera: {career}</p>
      <p>Género musical: {genre}</p>
    </div>
  );
};

export default Card;
