import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

/**
 * Setting custom logger
 * @see https://www.npmjs.com/package/redux-logger
 * @type {Function|*}
 */
const loggerMiddleware = createLogger({
    // ...options
});

/**
 * Configure app redux store
 * @param preloadState
 * @returns {Store<unknown, AnyAction> & Store<S & {}, A> & {dispatch: Dispatch<A>}}
 */
const config = (preloadState) => {
    return createStore(
        rootReducer,
        preloadState,
        compose(
            applyMiddleware(thunkMiddleware, loggerMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
};

export default config;