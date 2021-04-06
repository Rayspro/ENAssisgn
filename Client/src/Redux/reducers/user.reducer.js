import { REMOVE_LOGIN, LOGIN_ERROR, SET_LOGIN, INIT_LOGIN, DEFAULT_LOGIN,INIT_UPDATE_USER } from "../type";

const initailState = {
  name: "",
  email: "",
  login: false,
  loading: false,
  err: false,
  errMsg: "",
  type:false
};

function user(state = initailState, action) {
  const { type, payload } = action;
  switch (type) {
    case INIT_LOGIN:
      return {
        ...state,
        loading: true,
        err: false,
      };
    case SET_LOGIN:
      return {
        ...state,
        login: true,
        loading: false,
        name:payload.uname,
        email:payload.email,
        type:payload.type
      };
    case LOGIN_ERROR:
      return {
        ...state,
        err: true,
        errMsg: payload.msg,
        loading: false,
      };
    case DEFAULT_LOGIN:
      return {
        ...initailState,
      };
    default:
      return state;
  }
}

export default user;
