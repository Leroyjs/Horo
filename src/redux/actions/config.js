import { SET_ACTIVE_ZODIAC } from "../types";

function setActiveZodiac(zodiacData) {
  return {
    type: SET_ACTIVE_ZODIAC,
    payload: zodiacData,
  };
}
export { setActiveZodiac };
