import { combineReducers, createStore } from "redux"
import todoreducer from "./todoredux"


const rootReducer = combineReducers({
    todo:todoreducer
})

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store; 