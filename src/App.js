import React, {Component} from 'react';

const Header = props => <h1>{props.title}</h1>;

const InventoryItem = (props) => (
  <div className='InventoryItem'>
    <h2>{props.itemName}</h2>
    <h2>{props.itemPrice}</h2>
  </div>
);

class App extends Component {

  constructor(props) {
    super(props);
    this.title = 'BuyStuff';
    this.state = { 
      items: [
        { itemName: "Shoe", itemPrice: 5},
        { itemName: "Sock", itemPrice: 3},
      ]
    };
  }

  render() {
    return (
      <div>
        <Header title={this.title} />
        <InventoryItem 
          itemName={this.state.items[0].itemName} 
          itemPrice={this.state.items[0].itemPrice}
        />
        <InventoryItem 
          itemName={this.state.items[1].itemName} 
          itemPrice={this.state.items[1].itemPrice}
        />
      </div>
    );
  }
}

export default App;