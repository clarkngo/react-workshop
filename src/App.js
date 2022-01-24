import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      errors: []
    };
  }

  displayForm() {
    return (
      <div>
        Username: <input type="text" onBlur={this.validateUsernameOnBlur} /><br />
        Password: <input type="text" /><br />
        Password Confirmation: <input type="text" /><br />
        <br />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }

  validateUsernameOnBlur = (event) => {
    console.log("I should validate whatever is in ", event.target.value);
    this.setState();
  }

  submitForm(event) {
    event.preventDefault();
    console.log("Submitting form now..");
    console.log(event);
  }

  render() {
    return (
      <div className="App">
        Create Account
        <hr />
        {this.displayForm()}
      </div>
    );
  }
}

export default App;