import { GET_POSTS, EDIT_POST, SELECT_POST, SEARCH_POST } from "./types";

export const getPosts = () => dispatch => {
  fetch("http://localhost:3070/getPosts")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_POSTS,
        posts: data
      });
    })
    .catch(err => console.error(err));
};

export const selectPost = postIndex => dispatch => {
  dispatch({
    type: SELECT_POST,
    postIndex: postIndex
  });
};

export const editPost = post => dispatch => {
  dispatch({
    type: EDIT_POST,
    post: post
  });
};

export const searchPosts = search => dispatch => {
  dispatch({
    type: SEARCH_POST,
    searchTerm: search.searchTerm
  });
};
