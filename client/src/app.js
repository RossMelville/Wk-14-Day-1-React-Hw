import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('app')
  );
});
