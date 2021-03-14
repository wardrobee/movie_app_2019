import PropTypes from "prop-types";
import React from "react";

// class component
class App extends React.Component {
  // state object, put data of ur component inside state, data that will change
  state = {
    count: 0
  };

  add = () => {
    this.setState({ count: 1 });
  };
  minus = () => {
    this.setState({ count: -1 });
  };

  render() {
    return (
      <div>
        <h1>
          The number is: {this.state.count}
        </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
