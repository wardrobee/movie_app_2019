import React from "react";

// class component
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
  }

  // state object, put data of ur component inside state, data that will change
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }
  render() {
    console.log("render called");
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
