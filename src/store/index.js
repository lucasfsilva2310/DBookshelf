import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//
import searchReducer from "./modules/SearchBooks/reducers";

const reducers = combineReducers({
  /*states globais */
  infoBooks: searchReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
