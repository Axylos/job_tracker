import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import RootReducer from './RootReducer';
import RootEpic from './RootEpic';
import devTools from '../components/DevTools';

export const DevTools = devTools;
export const history = createHistory();
export const histMiddleware = routerMiddleware(history);

const epicMiddleware = createEpicMiddleware(RootEpic);

export const store = createStore(
  RootReducer,
  DevTools.instrument(),
  applyMiddleware(
    histMiddleware,
    epicMiddleware,
  )
);
