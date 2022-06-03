import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    Counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.Counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({
      Counters: counters,
    });
  };
  handleDelete = (itemId) => {
    const counters = this.state.Counters.filter(
      (counter) => counter.id !== itemId
    );
    this.setState({
      Counters: counters,
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      Counters: counters,
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar count={this.state.Counters.filter(count => count.value > 0).length} />
        <main className="container">
          <Counters
            count={this.state.Counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
