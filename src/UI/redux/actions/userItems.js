import axios from "axios";
import { GET_ALL_USERS, GET_ITEM_AGE_DEMOGRAPHIC } from "../actionConstants";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const baseURL = "http://localhost:3000";

export const getUsers = () => async (dispatch, getState) => {
  const { data } = await axios.get(`${baseURL}/users`, config);
  dispatch({
    type: GET_ALL_USERS,
    payload: data,
  });
};

export const getItemAgeDemographic = (item) => async (dispatch, getState) => {
  console.log(item);
  const { data } = await axios.get(`${baseURL}/users/age/${item}`, config);
  console.log(data);
  dispatch({
    type: GET_ITEM_AGE_DEMOGRAPHIC,
    payload: data,
  });
};
