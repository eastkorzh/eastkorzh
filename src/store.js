import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  persistedReducer,
  middleware,
);

const persistor = persistStore(store);

rootSagas.forEach(saga => sagaMiddleware.run(saga));

export default { store, persistor };
