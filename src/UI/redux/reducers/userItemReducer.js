import { GET_ALL_USERS, GET_ITEM_AGE_DEMOGRAPHIC } from "../actionConstants";

export const userItemReducer = (
  state = { users: [], agedemographic: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_ITEM_AGE_DEMOGRAPHIC:
      return {
        ...state,
        agedemographic: action.payload,
      };
    default:
      return state;
  }
};
