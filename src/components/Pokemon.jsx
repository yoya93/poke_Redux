import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPokeAccion, getPokeAccionSiguiente } from "../redux/pokeDucks";

// useDispatch: se usa para consumir la accion que está en pokeducks y dispara la llamada  a la api donde se kiera
//  useSelector : para leer array de pokeducks ya creado (devuelb la tienda) para acceder a cada uno de los reducer voy especificando la ruta

// se le da al button el button dispara la accion getPOkeccion con el dispatch la accion realiza el get a la api la api devuelve el valor en res.data.results con el valor en pyload y el tipo de accion realizada en type se entra al switch el cual realiza eltipo de accion en este caso es actualizar el state y retornarlo

const Pokemon = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones.array);

  useEffect(() => dispatch(getPokeAccion()), []);

  return (
    <div>
      lista de pokemones
      <button onClick={() => dispatch(getPokeAccionSiguiente())}>
        {" "}
        Siguiente
      </button>
      <ul>
        {pokemones.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
