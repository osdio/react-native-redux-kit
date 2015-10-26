import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';


const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);


function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}


export default configureStore;