import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  //VALIDAR EL FORMULARIO 1
  const [error1, seterror1] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [password, setPassword] = useState("");

  //VALIDAR EL FORMULARIO 2
  const [isValid, setFormValid] = useState(false);

  // Validacion del formulario Student!!

  const [error2, setError2] = useState(false);
  const [change, setChange] = useState("");


  //filtrado por edad

  
  return (
    <DataContext.Provider
      value={{
        error1,
        seterror1,
        showPassword,
        setShowPassword,
        nameValue,
        setNameValue,
        password,
        setPassword,
        setFormValid,
        isValid,

        
        error2,
        setError2,
        change,
        setChange
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
