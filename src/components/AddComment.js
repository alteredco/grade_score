import React, { Component } from 'react';
import { Consumer } from './Context/';

class AddComment extends Component {

  state = {
    value: ""
  }
  
  render() {
    console.log(this.state.value);
    return (
      <Consumer>
        {({actions}) => {
          const handleSubmit = (e) => {
            e.preventDefault()
            actions.addComment(this.state.value)
            this.setState( {value:""})
          }

          const handleValueChange = (e) => {
            this.setState( { value: e.target.value })
          }
          return (
            <form onSubmit={ handleSubmit }>
              <input 
                type="text"
                value={this.state.value}
                onChange={ handleValueChange}
                placeholder="Please enter your comments here."
              />
              <input 
                type="submit"
                value="Add Comment"
                disabled = { this.state.value === "" ? "disabled": null}
              />
            </form>
          );
        }}
      </Consumer>
    );
  }
  }

export default AddComment;