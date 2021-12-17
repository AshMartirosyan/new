import userApi from "../../api/user";
import { errorAction } from ".";

export const PASSWORD_CHANGED = "PASSWORD_CHANGED";

export const changePassword = (data) => {
  return async function (dispatch) {
    return await userApi
      .changePassword(data)
      .then((response) => {
        //Password Changed
        dispatch(passwordChanged(true));
      })
      .catch((err) => {
        //dispatch(errorAction(err.response.data));
        console.log("GETME Error ", err);
      });
  };
};

export const passwordChanged = (isChanged) => ({
  type: PASSWORD_CHANGED,
  payload: { isChanged: isChanged },
});
