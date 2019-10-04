import React, { Component } from 'react';
import Header from  './Header';
import Category from  './Category';


class App extends Component {
  state = {
    categories: [
      {
        title: "Create a structured portfolio",
        id: 1
      },
      {
        title: "Create an original portfolio",
        id: 2
      },
      {
        title: "Unobtrusive file structure",
        id: 3
      },
      {
        title: "Links",
        id: 4
      },
      {
        title: "Code comments",
        score: 0,
        id: 5
      },
      {
        title: "Codebase",
        id: 6
      },
      {
        title: "Code structure",
        id: 7
      }
    ]
  }

  handleDeleteCategory = (id) => {
    this.setState( prevState => {
      return {
        categories: prevState.categories.filter( c => c.id !== id )
      };
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header  title= "Portfolio Peer Review Score" totalPoints={ this.state.categories.length }/>
        {/* Categorys list */}
        {this.state.categories.map( category => 
          <Category 
            title={category.title}
            score={category.score}
            id= {category.id}
            key={category.id.toString()}
            removeCategory={this.handleDeleteCategory}
            />
        )}
      </div>
    );
  }
}

export default App;