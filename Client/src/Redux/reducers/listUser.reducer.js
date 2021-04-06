import {
  INIT_LIST_USER,
  SUCCESS_LIST_USER,
  ERROR_LIST_USER,
  ADD_USER,
  ERROR_USER,
  DELETE_USER,
  UPDATE_ERROR,
  UPDATE_USER,
  INIT_UPDATE_USER
} from "../type";

const userSch = {
  name: "",
  lname: "",
  fname: "",
  email: "",
  _id: "",
};

const initailState = {
  user: [],
  loading: false,
  err: false,
  totalPage: "0",
  errMsg: "",
  addUserError: "",
  updateError: "",
  updateloading: false,
};

function user(state = initailState, action) {
  const { type, payload } = action;
  switch (type) {
    case INIT_LIST_USER:
      return {
        ...state,
        loading: true,
        err: false,
      };
    case SUCCESS_LIST_USER:
      return {
        ...state,
        loading: false,
        user: [...payload.users],
        totalPage: payload.totalPage,
      };
    case ERROR_LIST_USER:
      return {
        ...state,
        err: true,
        errMsg: payload.msg,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case ERROR_USER:
      return {
        ...state,
        loading: false,
        addUserError: payload.msg,
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
        user: state.user.filter((data) => {
          if (data._id == payload.id) {
            return false;
          } else {
            return true;
          }
        }),
      };
    case UPDATE_USER:
      console.log(payload)
      return {
        ...state,
        updateloading: false,
        user: state.user.map((data) => {
          if (data._id == payload.user._id) {
            return {...payload.user};
          } else {
            return data;
          }
        }),
      };
    case INIT_UPDATE_USER:
      return {
        ...state,
        updateloading: true,
      };
    case UPDATE_ERROR:
      return {
        ...state,
        updateloading: false,
      };
    default:
      return state;
  }
}

export default user;
