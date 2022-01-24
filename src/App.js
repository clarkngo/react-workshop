import React, {Component} from 'react';

const Greeting = props => <p>Hello {props.name}!</p>;

class App extends Component {

  constructor(props) {
    super(props);
    this.title = 'React App';
    this.state = { clickCounter: 0};
  }

  renderClickcount() {
    return <p>I've been clicked {this.state.clickCounter} times!</p>
  }

  render() {
    return (
      <div>
        <h1>My App</h1>
        <h1>{this.title}</h1>
        <Greeting name="User" />
        {this.renderClickcount()}
      </div>
    )
  }
}

export default App;