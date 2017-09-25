import React from 'react';
import Comment from './Comment.jsx';

class CommentList extends React.Component {

  render() {

    const commentNodes = this.props.data.map ( (comment, index) => {
      return (
        <Comment film={comment.film} key={index}>
          {comment.film}
        </Comment>
      )
    })

    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    )
  }
}

export default CommentList