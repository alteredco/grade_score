import React from 'react';

const Comment = (props) => {
  return (
        <p className="comment-section">
        <span className={ props.content === "" ? "isHidden" : null}>
        <button className="remove-comment" onClick={ () => props.deleteComment(props.id)  }>✖</button>
        {props.content}</span>
        </p>
  );
}

export default Comment;