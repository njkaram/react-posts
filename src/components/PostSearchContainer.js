import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchPosts } from "../actions/postActions";
import { Control, Form } from "react-redux-form";
import Autocomplete from "react-autocomplete";

function PostSearchContainer(props) {
  return (
    <Form
      model="searchPostForm.searchPost"
      onChange={v => props.searchPosts(v)}
      className="post-search-container"
    >
      <Control.custom
        component={Autocomplete}
        model=".searchTerm"
        id=".searchTerm"
        controlProps={{
          getItemValue: item => item.title,
          items: props.posts,
          renderItem: (item, isHighlighted) => (
            <div
              style={{ background: isHighlighted ? "lightgray" : "white" }}
              key={item.id}
            >
              {item.title}
            </div>
          )
        }}
        renderMenu={children => (
          <div className="menu">{children.slice(0, 5)}</div>
        )}
        mapProps={prop => ({
          value: prop.viewValue,
          onSelect: value => prop.onChange(value),
          onChange: prop.onChange,
          inputProps: {
            placeholder: "Search"
          }
        })}
      />
    </Form>
  );
}
PostSearchContainer.propTypes = {
  searchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = {
  searchPosts: searchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSearchContainer);
