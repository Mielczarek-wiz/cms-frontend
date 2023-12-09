import { legacy_createStore as createStore, combineReducers } from "redux";
import reducers from "../reducers";

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers,
    }),
    {}
  );
}
