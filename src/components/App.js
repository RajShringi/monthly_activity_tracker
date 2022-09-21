import React from "react";
import AddActivity from "./AddActivity";
import moment from "moment";
import AllActivities from "./AllActivities";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: "",
      allActivities: [],
    };
  }
  handleUpdateLocalStorage = () => {
    localStorage.setItem(
      "allActivities",
      JSON.stringify(this.state.allActivities) || []
    );
  };
  componentDidMount() {
    if (localStorage.allActivities) {
      this.setState({
        allActivities: JSON.parse(localStorage.allActivities),
      });
    }
    window.addEventListener("beforeunload", this.handleUpdateLocalStorage);
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleUpdateLocalStorage);
  }
  handleInput = (e) => {
    this.setState({
      activity: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      let currentMonth = moment().format("MMMM");
      let end;
      if (currentMonth === "February") {
        end = 28;
      } else if (
        currentMonth === "June" ||
        currentMonth === "November" ||
        currentMonth === "April" ||
        currentMonth === "September"
      ) {
        end = 30;
      } else {
        end = 31;
      }
      let activity = {
        name: prevState.activity,
        days: this.createDays(1, end),
      };
      return {
        allActivities: [...prevState.allActivities, activity],
        activity: "",
      };
    });
  };
  createDays = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, i) => {
        return {
          value: i + start,
          isTracked: false,
        };
      });
  };

  trackDays = (activity, day) => {
    let allActivities = this.state.allActivities;
    let activityIndex = allActivities.findIndex((a) => a.name === activity);
    allActivities[activityIndex].days[day - 1].isTracked =
      !allActivities[activityIndex].days[day - 1].isTracked;
    this.setState({
      allActivities,
    });
  };
  handleDelete = (activity) => {
    let allActivities = this.state.allActivities;
    allActivities = allActivities.filter((a) => a.name !== activity);
    this.setState({
      allActivities,
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
          <AllActivities
            allActivities={this.state.allActivities}
            currentMonth={moment().format("MMMM")}
            trackDays={this.trackDays}
            handleDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}
export default App;
