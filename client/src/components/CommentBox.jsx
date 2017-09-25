import React from 'react';
import CommentList from './CommentList';

class CommentBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { film: 'Sausage Party', times: [13.30, 17.45]}, 
        { film: 'Cafe Society', times: [18.15, 20.45]},
        { film: 'Morgan', times: [16.40, 19.45]},
        { film: 'The 9th Life of Louis Drax', times: [18.00, 21.00]},
        { film: 'Naam Hai Akira', times: [19.30, 21.45]},
        { film: 'Equity', times: [18.55, 22.00]},
        { film: 'Things to Come', times: [19.15, 21.10]}
      ]
    }
  }

  render() {
    return (
      <section className='comment-box'>
        <CommentList data={this.state.data}/>
      </section>
    )
  }

}

export default CommentBox
