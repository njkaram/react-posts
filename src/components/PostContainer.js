import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts, selectPost } from "../actions/postActions";

function PostContainer(props) {
  useEffect(() => {
    props.getPosts();
  }, []);

  return (
    <div className="posts-container">
      <h2>
        <span>Posts</span>{" "}
        <span className="note">( Select a post to edit )</span>
      </h2>
      <div>
        {props.posts.map(post => (
          <span
            key={post.id}
            onClick={() => props.selectPost(post.id)}
            className="post"
          >
            <h4>
              {post.id}
              {". "}
              {post.title}
            </h4>
            <p>{post.body}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

PostContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  selectPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = { getPosts, selectPost };

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
