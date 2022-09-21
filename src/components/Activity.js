function Activity(props) {
  return (
    <div className="flex justify-between items-start my-8 shadow-md p-4 rounded-lg">
      <div className="basis-[30%]  bg-slate-50 self-stretch flex justify-center items-center">
        <div className="text-center">
          <h2 className="font-bold text-2xl">{props.activity.name}</h2>
          <p className="text-gray-100 bg-red-400 p-1 rounded-lg">
            {props.currentMonth}
          </p>
        </div>
      </div>
      <div className="basis-[60%] grid grid-cols-10 gap-2">
        {props.activity.days.map((day) => (
          <button
            onClick={() => props.trackDays(props.activity.name, day.value)}
            className={`shadow-inner border rounded-lg px-3 py-2 ${
              day.isTracked ? "bg-teal-500 text-white" : "bg-white"
            } hover:border-gray-300`}
            key={day.value}
          >
            {day.value}
          </button>
        ))}
      </div>
      <div>
        <button
          onClick={() => props.handleDelete(props.activity.name)}
          className="bg-red-400 text-white w-[30px] h-[30px] rounded-full self-start"
        >
          X
        </button>
      </div>
    </div>
  );
}
export default Activity;
