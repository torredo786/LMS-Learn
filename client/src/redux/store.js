import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { combineReducers } from 'redux';
import studentReducer from './reducers/studentReducer';

const rootReducer = combineReducers({
    student: studentReducer,
  });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
