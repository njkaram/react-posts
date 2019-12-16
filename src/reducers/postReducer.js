import {
  GET_POSTS,
  EDIT_POST,
  SELECT_POST,
  SEARCH_POST
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

const filterItems = (arr, query) => {
  if (arr && query) {
    return arr.filter(function(el) {
      return el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  } else if (arr) {
    return arr;
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        items: action.posts,
        currentItems: action.posts
      };
    case SELECT_POST:
      return {
        ...state,
        item: state.items.find(
          element => element.id === Number(action.postIndex)
        )
      };
    case EDIT_POST:
      let newPosts = [...state.currentItems];
      newPosts[newPosts.findIndex(element => element.id === action.post.id)] =
        action.post;
      var filter = [];
      if (state.searchTerm !== "") {
        filter = filterItems(newPosts, state.searchTerm);
      } else {
        filter = newPosts;
      }
      return {
        ...state,
        items: filter,
        currentItems: newPosts,
        item: {}
      };
    case SEARCH_POST:
      let filtered = [];
      if (action.searchTerm !== "") {
        filtered = filterItems(state.currentItems, action.searchTerm);
      } else {
        filtered = [...state.currentItems];
      }
      return {
        ...state,
        searchTerm: action.searchTerm,
        items: filtered
      };
    default:
      return state;
  }
}
