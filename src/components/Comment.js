import React from 'react';

const Comment = (props) => {
  return (
    <div className="comments">
      <h2>{props.title}</h2>
        <p className="comment-section">
        <button className="remove-comment" onClick={ () => props.deleteComment(props.id)  }>✖</button>
        {props.content}
        </p>
    </div>
  );
}

export default Comment;