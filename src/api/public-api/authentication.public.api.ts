import { Dispatch } from "redux";
import {
  userLoginFailure,
  userLoginRequest,
} from "../../redux/actions/public-actions/public-authentication-login.action";

// Login api function
export const userLogin = (
  userEmailAddress: string,
  userPassword: string,
  token: string
) => {
  return (dispatch: Dispatch) => {
    dispatch(userLoginRequest());
    fetch(
      `http://localhost:7005/api/v1/public/auth/user/login?token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmailAddress: userEmailAddress,
          userPassword: userPassword,
        }),
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch(userLoginFailure(error));
      });
  };
};

// Check enable two factor authenticatin
export const checkValid2FA = (token: string) => {
  return async (dispatch: Dispatch) => {
    
  }
}
