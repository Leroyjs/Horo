import { SET_COMPATIBILITY } from '../actions/types';

const initialState = false;

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPATIBILITY:
            return {
                genderFirst: action.payload.genderFirst,
                zodiacSignIdFirst: action.payload.zodiacSignIdFirst,
                genderSecond: action.payload.genderSecond,
                zodiacSignIdSecond: action.payload.zodiacSignIdSecond,
            };
    }
    return state;
};
