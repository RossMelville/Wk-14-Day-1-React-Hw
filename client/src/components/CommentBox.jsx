import React from 'react';
import CommentList from './CommentList';

class CommentBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { film: 'Sausage Party'}, 
        { film: 'Cafe Society'},
        { film: 'Morgan'},
        { film: 'The 9th Life of Louis Drax'},
        { film: 'Naam Hai Akira'},
        { film: 'Equity'},
        { film: 'Things to Come'}
      ]
    }
  }

  render() {
    return (
      <section className='comment-box'>
        This is where the film data will be displayed
      </section>
    )
  }

}

export default CommentBox

// <CommentList data={this.state.data}/>