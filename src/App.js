import PropTypes from "prop-types";
import React from "react";

// class component
class App extends React.Component {
  // state object, put data of ur component inside state, data that will change
  state = {
    count: 0
  };
  render() {
    return (
      <h1>
        The number is: {this.state.count}
      </h1>
    );
  }
}

export default App;
