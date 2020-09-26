import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "actions";

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button type="submit">SUbmit</button>
          </div>
        </form>
        <button
          className="fetch-comments"
          type="button"
          onClick={this.props.fetchComment}
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
});

export default connect(mapStateToProps, actions)(CommentBox);
