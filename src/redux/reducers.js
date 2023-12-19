import { combineReducers } from "redux";

const ADD_USERS = "ADD_USERS";
const ADD_POSTS = "ADD_POSTS";

export const addUsers = (users) => {
  return {
    type: ADD_USERS,
    users,
  };
};

export const addPosts = (posts) => {
  return {
    type: ADD_POSTS,
    posts,
  };
};

const userDetails = {
  userLists: [],
};

const userReducer = (state = userDetails, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        userLists: [action.users],
      };
    case ADD_POSTS:
      return {
        ...state,
        userLists: [action.users],
      };
    default:
      return state;
  }
};

const userApp = combineReducers({ userReducer });

export default userApp;
