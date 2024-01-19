import React, { useContext } from 'react';
import estudiantes from '../Estudiantes';
import { DataContext } from '../context/StudentContext';

const TheStudents = () => {
  const { change } = useContext(DataContext);

  // Filtra los estudiantes si hay un término de búsqueda, de lo contrario muestra todos los estudiantes
  const filteredStudents = change
    ? estudiantes.filter((estudiante) =>
        estudiante.busqueda.some((item) =>
          item.toLowerCase().includes(change.toLowerCase())
          ||
        estudiante.wordkey.toLowerCase().includes(change.toLowerCase())
        )
      )
    : estudiantes;
  return (
    <div className='containerStudent'>   
     {filteredStudents.map((estudiante) => (
      
        <div className="ContentStudent" key={estudiante.id}>
           <h3 className='id' >ID: {estudiante.id}</h3>
          <img className='Perfil'  src={estudiante.foto_perfil} alt="" />
         
          <h2 className='nombre' >Nombre:  {estudiante.nombre}</h2>
          <h2 className='colegio' >Colegio: {estudiante.colegio}</h2>
          <h2 className='pais' >País: {estudiante.pais}</h2>
          <h2 className='edad' >Edad: {estudiante.edad}</h2>
          <h6 className='wordkkey'>{estudiante.wordkey}</h6>
          <button className='myBtn'>Ver Mas</button>
        </div>
      ))}
    </div>
  );
};

export default TheStudents;