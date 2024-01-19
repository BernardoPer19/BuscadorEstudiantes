import { useContext } from "react";
import "./App.css";
import Form from "./components/Form";
import { DataContext } from "./context/StudentContext";
import MainStudents from "./components/MainStudents";

function App() {
  const { isValid } = useContext(DataContext);

  const validado = isValid ? <MainStudents/> : <Form />;

  return <>
  {validado}
  </>;
}

export default App;
