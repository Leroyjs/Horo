import { NEW_USER_REGISTRATION, EDIT_PROFILE_SAVE } from "../types";

function registration(accountData) {
  return {
    type: NEW_USER_REGISTRATION,
    payload: accountData,
  };
}
function editProfileSave(accountData) {
  return {
    type: EDIT_PROFILE_SAVE,
    payload: accountData,
  };
}

export { registration, editProfileSave };
