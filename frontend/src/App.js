import React, {Component} from 'react';

import CreateItem from './CreateItem.js';
import Items from './Items.js';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  async componentDidMount() {
    const response = await fetch("/items/");
    const items = await response.json();
    this.setState({items: items});
  }

  async onCreate(item) {
    this.setState(prevState => ({items: [...prevState.items, item]}));
    await fetch(
      "/items/", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Items items={this.state.items} />
        <CreateItem onCreate={this.onCreate.bind(this)} />
      </div>
    );
  }
}

export default App;
