import React, {Component} from 'react';

import './CreateItem.css';

class CreateItem extends Component {

  constructor(props) {
    super(props);
    this.state = {item: ""};
  }

  async onSubmit(event) {
    event.preventDefault();
    await this.props.onCreate(this.state.item);
    this.setState({item: ""});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="FormGroup">
          <label>Item:</label>
          <input value={this.state.item}
                 onChange={(event) => this.setState({item: event.target.value})}
          />
        </div>
        <button className="FormButton">Create!</button>
      </form>
    );
  }
}

export default CreateItem;
