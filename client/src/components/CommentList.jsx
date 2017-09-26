import React from 'react';
import Comment from './Comment.jsx';

class CommentList extends React.Component {


  render() {

    const commentNodes = this.props.data.map ( (comment, index, times) => {
      return (
        <div>
          <Comment film={comment.film} key={index} times={comment.times}>
            {comment.film}
          </Comment>
          
        </div>
        
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

//onClick={if(comment.show === false) comment.show === true}