import axios from "axios";
import { SERVER_ENDPOINT } from "../../server.config";
import { SET_LOGIN, INIT_LOGIN, LOGIN_ERROR, DEFAULT_LOGIN, } from "../type";

export const LoginAction = (user) => async (dispatch) => {
  try {
    dispatch({
      type: INIT_LOGIN,
    });
    const res = await axios.post(`${SERVER_ENDPOINT}/Login`, {
      email: user.email,
      password: user.password,
    });
    await localStorage.setItem("token", res.data.token);
    await localStorage.setItem("type", res.data.type);
    dispatch({
      type: SET_LOGIN,
      payload: res.data,
    });
  } catch (err) {
    if (!!err.response) {
      dispatch({
        type: LOGIN_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
  }
};

export const logout = () => async (dispatch) => {
  localStorage.clear()
};


export const DefaultLoginAction = () => async (dispatch) => {
  dispatch({
    type: DEFAULT_LOGIN,
  });
};
