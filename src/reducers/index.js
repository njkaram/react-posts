import { combineReducers } from "redux";
import postReducer from "./postReducer";
import { combineForms } from "react-redux-form";

const initialPostState = {
  id: "",
  title: "",
  body: ""
};

const initialSearchState = {
  searchTerm: ""
};

export default combineReducers({
  posts: postReducer,

  editPostForm: combineForms(
    {
      editedPost: initialPostState
    },
    "editPostForm"
  ),

  searchPostForm: combineForms(
    {
      searchPost: initialSearchState
    },
    "searchPostForm"
  )
});
