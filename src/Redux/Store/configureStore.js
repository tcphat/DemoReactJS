import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {middleware as awaitMiddleware} from 'redux-await';
import combineReducers from '../Reducers/index';

export default function configureStore(initialState) {
    return createStore(
        combineReducers,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware, awaitMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
}