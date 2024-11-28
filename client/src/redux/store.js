import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { combineReducers } from "redux";
import studentReducer from "./reducers/studentReducer";
import { loadState, saveState } from "../utils/localStorage";

const rootReducer = combineReducers({
  student: studentReducer,
});

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with persisted state
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState, // Initialize with persisted state
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Subscribe to store updates to save the state
store.subscribe(() => {
  saveState(store.getState());
});

// Run sagas
sagaMiddleware.run(rootSaga);

export default store;
