import { NEW_USER_REGISTRATION } from '../actions/types';

function registration(accountData) {
    return {
        type: NEW_USER_REGISTRATION,
        payload: accountData,
    };
}

export { registration };
