import React from 'react';

class Comment extends React.Component {

  render() {
    return(
      <div className='comment'>
        <h4> {this.props.film} </h4>
      </div>
    )
  }
}

export default Comment