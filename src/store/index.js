import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers'
import saga from '../saga'

// middleware that logs actions
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
    const config = {
        key: 'root',
        storage,
        blacklist: [],  // reducer names
        //debug: true //to get useful logging
    };
    const enhancers =
        [applyMiddleware(
            loggerMiddleware,
            sagaMiddleware
        )];
    const persistConfig = {enhancers};
    const store = createStore(persistCombineReducers(config, reducer), initialState, compose(...enhancers));
    const persistor = persistStore(store, persistConfig);
    sagaMiddleware.run(saga);
    return {persistor, store};
}

export default configureStore({});