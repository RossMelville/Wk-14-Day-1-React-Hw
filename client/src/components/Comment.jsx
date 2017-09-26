import React from 'react';

class Comment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

    this.changeShowStatus = this.changeShowStatus.bind(this)
  }

  changeShowStatus() {
    this.setState( (prevState) => {
      let newShow = prevState.show;

      if (newShow === true) {
        newShow = false;
      } else {
        newShow = true;
      }
      
      return {show: newShow}
    })
      
  }

  render() {
    return(
      // this.changeShowStatus = this.changeShowStatus.bind(this)
      <div className='comment'>
        <h4> {this.props.film} </h4>
        <div className="showings" id="showings">
          { this.state.show ? this.props.times : "" }
        </div>
        <button onClick={() => this.changeShowStatus()}>Show times
        </button>
      </div>
    )
  }
}

export default Comment

// onClick={ () => this.comment}
//() => this.changeShowStatus(this.props.show) 