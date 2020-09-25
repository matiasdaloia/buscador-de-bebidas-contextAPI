import Axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, guardarRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    ingrediente: "",
    categoria: "",
  });
  const [consulta, setConsulta] = useState(false);

  useEffect(() => {
    if (consulta) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.ingrediente}&c=${busqueda.categoria}`;
        const resultado = await axios.get(url);
        guardarRecetas(resultado.data.drinks);
      };
      obtenerRecetas();
    }
  }, [busqueda, consulta]);

  return (
    <RecetasContext.Provider value={{ recetas, buscarRecetas, setConsulta }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
