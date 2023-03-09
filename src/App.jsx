import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [userData, setUserData] = useState({
    career: "",
    name: "",
    genre: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      userData.career.length > 3 &&
      userData.name.length >= 6 &&
      userData.genre !== ""
    ) {
      setShow(true);
      setError(false);
    } else {
      setShow(false);
      setError(true);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setShow(false);
    setError(false);
    setUserData({ ...userData, [name]: value.trim() });
  };

  return (
    <div className="App">
      <img
        src="https://i.redd.it/256hsem2rkry.jpg"
        alt="profile-img"
        className="profile-img"
      />
      <h1>Ingresa tu info: </h1>
      <form onSubmit={handleSubmit} className="form">
        <Input
          label="Carrera:"
          id="career"
          type="text"
          name="career"
          handleChange={handleInput}
        />
        <Input
          label="Nombre completo:"
          id="name"
          name="name"
          type="text"
          handleChange={handleInput}
        />
        <Input
          label="Género musical favorito:"
          id="genre"
          name="genre"
          type="text"
          handleChange={handleInput}
        />
        <button type="submit">Enviar</button>
      </form>
      {show && (
        <Card
          career={userData.career}
          name={userData.name}
          genre={userData.genre}
        />
      )}
      {error && (
        <p className="error">
          Por favor chequea que la información sea correcta
        </p>
      )}
    </div>
  );
}

export default App;
