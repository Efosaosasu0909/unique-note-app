import { registerUser } from "../apis";

export const registerNewUser = (userData) => async (dispatch) => {
  try {
    const { data } = await registerUser(userData);
    dispatch({
      type: "user_register",
      payload: data,
    });
  } catch (err) {
    if (err.response && err.response.data) {
      alert(err.response.data.msg);
    }
  }
};
