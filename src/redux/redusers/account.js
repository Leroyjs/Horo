import { NEW_USER_REGISTRATION } from '../actions/types';

const initialState = false;

// const initialState = {
//     date: {
//         day: 4,
//         month: 2,
//         year: 2001,
//     },
//     gender: 'male',
//     token: 'gAaKh8H28nZxN_TLov6Gq9wriYBqwLHu',
//     name: 'Nikita',
// };

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_USER_REGISTRATION:
            return {
                date: action.payload.date,
                gender: action.payload.gender,
                token: action.payload.token,
                zodiac: action.payload.zodiac,
            };
    }
    return state;
};
