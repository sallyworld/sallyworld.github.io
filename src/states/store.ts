import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import global from './features/global';

const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isReduxLoggerEnabled = process.env.REACT_APP_REDUX_LOGGER_ENABLED === 'true';

const middlewares = getDefaultMiddleware();

const logger = createLogger({
  timestamp: false,
  collapsed: true,
  predicate: () => (isEnvDevelopment && isReduxLoggerEnabled),
});

middlewares.push(logger);

const store = configureStore({
  reducer: {
    global,
  },
  middleware: middlewares,
  devTools: isEnvDevelopment,
});

const rootState = store.getState;
const rootDispatch = store.dispatch;

export type State = ReturnType<typeof rootState>;
export type Dispatch = typeof rootDispatch;

export default store;
