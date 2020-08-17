// Tienda con los estados para que sean disponibles en nuestra app  === Une todos los archivos (pokeducks.js,userducks)

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import pokeReducer from "./pokeDucks";

const rootReducer = combineReducers({
  pokemones: pokeReducer,
  //usuarioReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
