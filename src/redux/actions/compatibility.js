import { SET_COMPATIBILITY } from "../types";

function setCompatibility(accountData) {
  return {
    type: SET_COMPATIBILITY,
    payload: accountData,
  };
}
export { setCompatibility };
