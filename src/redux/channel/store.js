import { createStore, applyMiddleware } from "redux";
import thunk  from "redux-thunk";
import channelReducer from "./channelReducer";

const store = createStore(channelReducer, applyMiddleware(thunk));

export default store;
