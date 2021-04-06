import axios from "axios";
import { SERVER_ENDPOINT } from "../../server.config";
import {
  INIT_LIST_USER,
  SUCCESS_LIST_USER,
  ERROR_LIST_USER,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  UPDATE_ERROR,
  INIT_UPDATE_USER,
} from "../type";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

export const ListUserAction = (page = 1) => async (dispatch) => {
  try {
    dispatch({
      type: INIT_LIST_USER,
    });
    const res = await axios.get(
      `${SERVER_ENDPOINT}/user/getAllUser?page=${page}`,
      header
    );
    dispatch({
      type: SUCCESS_LIST_USER,
      payload: res.data,
    });
  } catch (err) {
    if (!!err.response) {
      dispatch({
        type: ERROR_LIST_USER,
        payload: { msg: err.response.data.msg },
      });
    }
  }
};

export const AddUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: INIT_LIST_USER,
    });
    const res = await axios.post(
      `${SERVER_ENDPOINT}/user/create`,
      user,
      header
    );
    dispatch({
      type: ADD_USER,
    });
  } catch (err) {
    if (!!err.response) {
      dispatch({
        type: ERROR_LIST_USER,
        payload: { msg: err.response.data.msg },
      });
    }
  }
};

export const DeleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: INIT_LIST_USER,
    });
    const res = await axios.get(`${SERVER_ENDPOINT}/user/delete/${id}`, header);
    dispatch({
      type: DELETE_USER,
      payload: { id: res.data.id },
    });
  } catch (err) {
    if (!!err.response) {
      dispatch({
        type: ERROR_LIST_USER,
        payload: { msg: err.response.data.msg },
      });
    }
  }
};

export const UpdateUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: INIT_UPDATE_USER,
    });
    const res = await axios.post(
      `${SERVER_ENDPOINT}/user/update`,
      user,
      header
    );
    console.log(res.data)
    dispatch({
      type: UPDATE_USER,
      payload: { user: {...res.data} },
    });
  } catch (err) {
    console.log(err)
    if (!!err.response) {
      dispatch({
        type: UPDATE_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
  }
};
