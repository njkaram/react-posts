import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editPost } from "../actions/postActions";
import { Control, Form, Errors, actions } from "react-redux-form";

function PostFormContainer(props) {
  if (props.post.id !== undefined) {
    props.setEditPost(props.post);
    return (
      <Form
        model="editPostForm.editedPost"
        onSubmit={v => props.editPost(v)}
        className="post-form-container"
      >
        <h2>Edit Post</h2>
        <div className="field">
          <label>{"Title:  "}</label>
          <Control.textarea
            model=".title"
            placeholder="Title"
            required
            validateOn="blur"
            className="title"
          />
          <Errors
            className="errors"
            model=".title"
            show="touched"
            messages={{
              valueMissing: "Title is required"
            }}
          />
        </div>
        <div className="field">
          <label>{"Body:  "}</label>
          <Control.textarea
            model=".body"
            placeholder="Body"
            required
            validateOn="blur"
          />
          <Errors
            className="errors"
            model=".body"
            show="touched"
            messages={{
              valueMissing: "Body is required"
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    );
  } else {
    return null;
  }
}

PostFormContainer.propTypes = {
  editPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.posts.item
});

const mapDispatchToProps = {
  setEditPost: values => actions.merge("editPostForm.editedPost", values), //special merge acton to set the initial edit values after load
  editPost: editPost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);
