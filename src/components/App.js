import React, { Component } from 'react';
import Header from  './Header';
import Category from  './Category';
import Comment from './Comment';
import AddComment from './AddComment';
class App extends Component {
  state = {
    categories: [
      {
        title: "Create a structured portfolio",
        score: 0,
        id: 1,
        isHighScore: false
      },
      {
        title: "Create an original portfolio",
        score: 0,
        id: 2,
        isHighScore: false
      },
      {
        title: "Unobtrusive file structure",
        score: 0,
        id: 3,
        isHighScore: false
      },
      {
        title: "Links",
        score: 0,
        id: 4,
        isHighScore: false
      },
      {
        title: "Code comments",
        score: 0,
        id: 5,
        isHighScore: false
      },
      {
        title: "Codebase",
        score: 0,
        id: 6,
        isHighScore: false
      },
      {
        title: "Code structure",
        score: 0,
        id: 7,
        isHighScore: false
      }
    ],
    comments: [
      {
        contents: "",
        id: 1
      }
    ]
  }

  //comment id counter
  prevCommentId = 1;

  handleScoreChange = ( index, delta ) => {
    this.setState( prevState =>  ({
        score: prevState.categories[index].score += delta
    }))
  }

  handleHighScore = () => {
   const scores = this.state.categories.map( c => c.score)
   const highScore = Math.max(...scores);
   if(highScore) {
     return highScore
   } 
   return null;
  }

  handleAddComment = (comment) => {
    this.setState( prevState => {
      return {
        comments: [
          ...prevState.comments,
          {
            contents: comment,
            id: this.prevCommentId += 1
          }
        ]
      };
    })
  }

  handleDeleteComment = (id) => {
    this.setState( prevState => {
      return {
        comments: prevState.comments.filter( c => c.id !== id )
      };
    })
  }

  render() {
    const highScore =  this.handleHighScore();
    return (
      <div className="scoreboard">
        <Header 
          categories={ this.state.categories }
          />
        {/* Categorys list */}
        {this.state.categories.map( (category, index) => 
          <Category 
            title={category.title}
            score={category.score}
            id= {category.id}
            key={category.id.toString()}
            index={ index }
            changeScore = { this.handleScoreChange }
            isHighScore = {highScore === category.score}
            />
        )}
      <div className="comments">
        <h2>Peer Reviewer Comments</h2>
        {this.state.comments.map( (comment) =>
          <Comment 
            title={comment.title}
            content = {comment.contents}
            id = {comment.id}
            key = {comment.id.toString()}
            deleteComment={this.handleDeleteComment}

          />
        )}
        <AddComment 
          addComment= { this.handleAddComment }
        />
        </div>
      </div>
    );
  }
}

export default App;