import React, { Component } from 'react';

class AddComment extends Component {

  state = {
    value: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addComment(this.state.value)
    this.setState({ value: "" })
  }

  handleValueChange = (e) => {
    this.setState( { value: e.target.value })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input 
          type="text"
          value={ this.state.value }
          onChange={ this.handleValueChange }
          placeholder="Please enter your comments here."
        />
        <input 
          type="submit"
          value="Add Comment"
          disabled = { this.state.value === "" ? "disabled": null}
        />
      </form>
    );
  }
}

export default AddComment;