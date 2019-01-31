import React, {Component} from 'react';

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
        <label>Item:
          <input value={this.state.item}
                 onChange={(event) => this.setState({item: event.target.value})}
          />
        </label>
        <button>Create!</button>
      </form>
    );
  }
}

export default CreateItem;
