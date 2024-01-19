import React, { useContext, useState } from "react";
import { DataContext } from "../context/StudentContext";

const Form = () => {
  const {
    error1,
    seterror1,
    showPassword,
    setShowPassword,
    nameValue,
    setNameValue,
    password,
    setPassword,
    setFormValid,
  } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameValue == "" || password == "" || password != "Directores123") {
      seterror1(true);
      setFormValid(false);
    } else {
      seterror1(false);
      setFormValid(true);
      alert("Contraseña Correcta");
    }
  };
  return (
    <div className="containerForm">
      <form className="form" onSubmit={handleSubmit}>
        <h1>ERES UN DIRECTOR?</h1>
        <h6>Contraseña: Directores123</h6>
   
        <div className="contra">
        <input
          className="inp1"
          type="text"
          placeholder="Escribe su Nombre..."
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
        />
          <input
            className="inp1"
            type={showPassword ? "text" : "password"}
            placeholder="Escribe La Contraseña..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

         <label htmlFor="">
            <input
            className="show"
            type="checkbox"
            onClick={() => setShowPassword(!showPassword)}
          />
          Ver Contaseña
          </label>
       

        </div>

        <input className="btn1" type="submit" />
        {error1 ? (
        <p className="err2">Escribe mejor los valores desicnados!</p>
      ) : null}
      </form>
     
    </div>
  );
};

export default Form;
