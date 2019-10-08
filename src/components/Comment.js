import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({content, deleteComment, id}) => {
  return (
        <p className="comment-section">
        <span className={ content === "" ? "isHidden" : null}>
        <button className="remove-comment" onClick={ () => deleteComment(id)  }>✖</button>
        {content}</span>
        </p>
  );
}

Comment.propTypes = {
  content: PropTypes.string, 
  deleteComment: PropTypes.func, 
  id: PropTypes.number
}

export default Comment;