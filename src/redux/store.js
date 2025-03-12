import { combineReducers, createStore } from "redux";
import booksReducer from "./booksRedux/reducer";
import moviesReducer from "./moviesRedux/reducer";

const rootReducer = combineReducers({
     books: booksReducer,
     movies : moviesReducer
})

const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

export default store;