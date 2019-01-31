import React, {Component} from 'react';

import Items from './Items.js';

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

  render() {
    return (
        <div className="App">
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
