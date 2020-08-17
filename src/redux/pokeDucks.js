import axios from "axios";

// constantes :  ese estado se consume en algunos componentes

const dataInicial = {
  array: [],
  offset: 0,
};

// types
const Get_poke_exito = "Get_poke_exito";
const Get_Siguiente_poke_exito = "Get_Siguiente_poke_exito";

//reducer :  acepta esta lista de pokemones y lo envia a una constante o estado

export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case Get_poke_exito:
      return { ...state, array: action.pyload };
    case Get_Siguiente_poke_exito:
      return {
        ...state,
        array: action.pyload.array,
        offset: action.pyload.offset,
      };

    default:
      return state;
  }
}

//acciones : Consume la Api  de pokemones y una vez lo tenemos la mandamos a reducer =0=== tambien permite con otra opciones  eliminar pokemos de la lista lo cual significa que en este archivo van a estar todas las acciones vinculadas con pokemones

// dispatch: activar el reducer
// getState : obtener data inicial o la ke este en state
export const getPokeAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    );
    dispatch({
      type: Get_poke_exito,
      pyload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getPokeAccionSiguiente = () => async (dispath, getState) => {
  try {
    const offset = getState().pokemones.offset;
    const siguiente = offset + 20;
    console.log(offset);
    const res = await axios(
      `https://pokeapi.co/api/v2/pokemon?offset=${siguiente}=0&limit=20`
    );
    dispath({
      type: Get_Siguiente_poke_exito,
      pyload: {
        array: res.data.results,
        offset: siguiente,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
