import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {
  // crear el state del context
  const [categorias, setCategorias] = useState([]);

  // ejecutar el llamado a la api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const resultado = await axios.get(url);
      setCategorias(resultado.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
