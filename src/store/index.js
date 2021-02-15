import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//
import searchReducer from "./modules/SearchBooks/reducers";
import descriptionReducer from "./modules/DescriptionBook/reducers";
import favoritesReducer from "./modules/FavoriteBooks/reducers";

const reducers = combineReducers({
  /*states globais */
  infoBooks: searchReducer,
  descriptionBook: descriptionReducer,
  favoriteList: favoritesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
