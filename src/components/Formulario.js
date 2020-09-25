import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

function Formulario() {
  const { buscarRecetas, setConsulta } = useContext(RecetasContext);
  const { categorias } = useContext(CategoriasContext);

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const obtenerDatosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        setConsulta(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>
      <div className="row">
        <input
          type="text"
          className="form-control col-5"
          placeholder="Buscar por Ingrediente"
          name="ingrediente"
          onChange={obtenerDatosBusqueda}
        />
        <select
          name="categoria"
          id="categoria"
          className="form-control col-4 ml-2"
          onChange={obtenerDatosBusqueda}
        >
          <option value="">Selecciona una Categoría</option>
          {categorias.map((categoria) => (
            <option value={categoria.strCategory} key={categoria.strCategory}>
              {categoria.strCategory}
            </option>
          ))}
        </select>
        <button
          type="submit"
          value="consultar"
          className="form-control btn-primary
          ml-1 col-2"
        >
          Consultar
        </button>
      </div>
    </form>
  );
}

export default Formulario;
