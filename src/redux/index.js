import { createStore, combineReducers } from 'redux';
import { accountReducer } from './redusers/account';

const rootReducer = combineReducers({
    account: accountReducer,
});

export default createStore(rootReducer);
