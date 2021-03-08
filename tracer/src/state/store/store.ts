import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// this file stores all of the reducers so literally more like a holding a data if only its available

// links with reducers
