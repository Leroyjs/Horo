import { NEW_USER_REGISTRATION, EDIT_PROFILE_SAVE } from "../types";

const initialState = false;

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER_REGISTRATION:
      return {
        date: action.payload.date,
        gender: action.payload.gender,
        token: action.payload.token,
        zodiac: action.payload.zodiacSign,
        name: action.payload.name,
        avatar: action.payload.avatar,
        fb: action.payload.fb,
        vk: action.payload.vk,
        ok: action.payload.ok,
        phoneNumber: action.payload.phoneNumber,
      };
    case EDIT_PROFILE_SAVE:
      return {
        ...state,
        gender: action.payload.gender,
        name: action.payload.name,
        avatar: action.payload.avatar,
        fb: action.payload.fb,
        vk: action.payload.vk,
        ok: action.payload.ok,
      };
  }
  return state;
};
