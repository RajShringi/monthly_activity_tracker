function AddActivity(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="max-w-md mx-auto text-center"
    >
      <input
        className="border py-2 px-12 shadow-inner rounded-tl-lg rounded-bl-lg outline-none hover:border-gray-300"
        type="text"
        name="activity"
        value={props.activity}
        placeholder="e.g coding"
        onChange={props.handleInput}
      />
      <button
        className="text-slate-50 bg-teal-400 py-2 px-3 rounded-br-lg rounded-tr-lg font-light border border-teal-400 hover:bg-teal-500 hover:border-teal-500"
        type="submit"
      >
        Add Activity
      </button>
    </form>
  );
}
export default AddActivity;
