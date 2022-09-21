import Activity from "./Activity";

function AllActivities(props) {
  return (
    <div className="">
      {props.allActivities.map((activity, index) => {
        return (
          <Activity
            key={index}
            activity={activity}
            currentMonth={props.currentMonth}
            trackDays={props.trackDays}
          />
        );
      })}
    </div>
  );
}
export default AllActivities;
