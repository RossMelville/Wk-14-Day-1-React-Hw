import React from 'react';
import CommentList from './CommentList';

class CommentBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { film: 'Sausage Party', times: [13.30, 17.45], show: false}, 
        { film: 'Cafe Society', times: [18.15, 20.45], show: false},
        { film: 'Morgan', times: [16.40, 19.45], show: false},
        { film: 'The 9th Life of Louis Drax', times: [18.00, 21.00], show: false},
        { film: 'Naam Hai Akira', times: [19.30, 21.45], show: false},
        { film: 'Equity', times: [18.55, 22.00], show: false},
        { film: 'Things to Come', times: [19.15, 21.10], show: false}
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
