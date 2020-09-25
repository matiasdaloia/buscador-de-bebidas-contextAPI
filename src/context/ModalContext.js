import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Crear el context

export const ModalContext = createContext();

// Crear el provider

const ModalProvider = (props) => {
  //state del provider

  const [idreceta, guardarIdReceta] = useState(null);
  const [informacion, guardarReceta] = useState({});

  //una vez que tenemos una receta llamar la API:

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idreceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const resultados = await axios.get(url);

      guardarReceta(resultados.data.drinks[0]);
    };
    obtenerReceta();
  }, [idreceta]);

  return (
    <ModalContext.Provider
      value={{ guardarIdReceta, informacion, guardarReceta }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
