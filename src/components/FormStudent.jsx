import React, { useContext, useState } from "react";
import { DataContext } from "../context/StudentContext";

const FormStudent = () => {
  const { error2, setError2, change, setChange, nameValue } =
    useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (change == "") {
      setError2(true);
    } else {
      setError2(false);
    }
  };

  const handleChange = (e) => {
    setChange(e.target.value);
    // Realiza acciones mientras se modifica el campo
    console.log(change); // Aquí obtendrás el valor actualizado
  };

  return (
    <div className="contF">
      <h1 className="nose">¡¡Hola!! <span>{nameValue}</span> Escribe Datos De Un Estudiante</h1>
      <form className="famr2" onSubmit={handleSubmit}>
        <input
          className="inp3"
          type="text"
          onChange={handleChange}
          placeholder="Nombre Del Estudiante..."
        />
        <input className="btn2" type="submit" value="Enviar" />
      </form>
      {error2 ? (
        <p className="err">Escribe mejor los valores desicnados!</p>
      ) : null}
    </div>
  );
};

export default FormStudent;
