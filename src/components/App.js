import React, { Component } from 'react';
import Header from  './Header';
import Category from  './Category';


class App extends Component {
  state = {
    categories: [
      {
        title: "Create a structured portfolio",
        score: 0,
        id: 1
      },
      {
        title: "Create an original portfolio",
        score: 0,
        id: 2
      },
      {
        title: "Unobtrusive file structure",
        score: 0,
        id: 3
      },
      {
        title: "Links",
        score: 0,
        id: 4
      },
      {
        title: "Code comments",
        score: 0,
        id: 5
      },
      {
        title: "Codebase",
        score: 0,
        id: 6
      },
      {
        title: "Code structure",
        score: 0,
        id: 7
      }
    ],
    comments: [
      {
        title: "Peer Reviewer Comments",
        contents: "Please enter your comments on the project.",
        id: 1
      }
    ]
  }

  handleScoreChange = ( index, delta ) => {
    this.setState( prevState =>  ({
        score: prevState.categories[index].score += delta
    }))
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
      <div className="scoreboard">
        <Header  
          title= "Portfolio Peer Review Score" 
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
            // removeCategory={this.handleDeleteCategory}
            />
        )}
        <div className="comments">
              <h2>Peer Reviewer Comments</h2>
              <p className="comment-section"><button className="remove-comment">✖</button>
              Here are my comments on this project. Ladida!</p>
            </div>
      </div>
    );
  }
}

export default App;