import React, {Component} from 'react';
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSecret : false
    }
  }

  secretMessage() {
    if (!this.state.showSecret) {
      return;
    }
    return (
      <div className='secret-message'>
        I am the secret message!
      </div>
    );
  }

  toggleSecretMessage() {
    this.setState({
      showSecret: !this.state.showSecret
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleSecretMessage.bind(this)}>Click to { this.state.showSecret ? "hide" : "show"} the secret message!</button>
        <br/>
        1st approach in-line conditional: { this.state.showSecret ? this.secretMessage() : null }
        <br/>
        2nd approach without in-line conditional: {this.secretMessage()}
      </div>
    );
  }
}

export default App;