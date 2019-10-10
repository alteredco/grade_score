import React, { Component } from 'react';

const gradeScoreContext = React.createContext();

export class Provider extends Component {
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
    return (
      <gradeScoreContext.Provider value = {{
        categories: this.state.categories,
        comments: this.state.comments,
        actions: {
          changeScore: this.handleScoreChange,
          highScore: this.handleHighScore,
          deleteComment: this.handleDeleteComment,
          addComment: this.handleAddComment
        }
      }}>
      { this.props.children }
      </gradeScoreContext.Provider>
    );
  }
}
export const Consumer = gradeScoreContext.Consumer;

