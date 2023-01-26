import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { rootReducer } from '../reducers/RootReducer';
import { loginWatcher } from '../sagas/Sagas';

import { composeWithDevTools } from 'redux-devtools-extension';

export const createAsyncStore = () => {
    
    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools()
        )
    );
    sagaMiddleware.run(loginWatcher);

    return store;
}