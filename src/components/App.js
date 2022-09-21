import React from "react";
import AddActivity from "./AddActivity";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activity: "",
      allActivities: [],
    };
  }
  handleInput = (e) => {
    this.setState({
      activity: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        allActivities: [...prevState.allActivities, prevState.activity],
        activity: "",
      };
    });
  };
  render() {
    return (
      <div className="container mx-auto text-gray-700">
        <header className="text-center py-8 mb-6">
          <h1 className="text-4xl font-semibold text-cyan-500">
            Monthly Activity Tracker!
          </h1>
        </header>
        <main>
          <AddActivity
            activity={this.state.activity}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
          />
        </main>
      </div>
    );
  }
}
export default App;
