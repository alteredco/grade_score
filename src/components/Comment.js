import React from 'react';
import { Consumer } from './Context/';

const Comment = () => {
  return (
      <div className="comments">
        <h2>Peer Reviewer Comments</h2>
        <p className="comment-section">
        <Consumer>
          { ({comments , actions}) => (
            <React.Fragment>
            {comments.map( (comment) =>
              <span className={ comment.contents === "" ? "isHidden" : null}>
                <button className="remove-comment" onClick={ () => actions.deleteComment(comment.id)  }>✖
                </button>
                {comment.contents}</span>
              )}
              </React.Fragment>
            )}
        </Consumer>
        </p>
      </div>
  );
}

export default Comment;