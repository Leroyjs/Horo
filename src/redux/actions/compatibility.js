import { SET_COMPATIBILITY } from '../actions/types';

function compatibility(accountData) {
    return {
        type: SET_COMPATIBILITY,
        payload: accountData,
    };
}
export { compatibility };
