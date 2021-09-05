import { SET_ACTIVE_ZODIAC } from "../types";

const initialState = { activeZodiac: false };

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_ZODIAC:
      return { ...state, activeZodiac: action.payload };
  }
  return state;
};
