import React from "react";

const Card = ({ career, name, genre }) => {
  return (
    <div className="card">
      <h3>Nombre: {name}</h3>
      <h3>Carrera: {career}</h3>
      <h3>Género musical: {genre}</h3>
    </div>
  );
};

export default Card;
