import React, {Component} from 'react';
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      fieldLength: 0,
    };
    this.updateFieldLength = this.updateFieldLength.bind(this);
  }

  updateFieldLength = (event) => {
    const fieldLength = event.target.value.length;
    this.setState({ fieldLength });
  }

  validateTextLength = (event) => {
    const text = event.target.value;
    if (text.length < 100) {
      console.log("character count must be 100 or more");
    }
  }

  displayForm() {
    return (
      <div>
        <textarea onChange={this.updateFieldLength} onBlur={this.validateTextLength}></textarea>
        <button onClick={this.submitForm}>Submit</button>
        <p>Character count: {this.state.fieldLength}</p>
      </div>
    );
  }

  submitForm(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Blog Post Writer</h1>
        <hr />
        <h2>Write your post here</h2>
        {this.displayForm()}
      </div>
    );
  }
}

export default App;