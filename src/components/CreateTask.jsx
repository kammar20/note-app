export default function CreateTask({
  inputValue,
  setInputValue,
  addTask,
  selectedTask,
}) {
  function handleInputChange(e) {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex justify-center items-end gap-5 w-full mb-16">
      <div className="w-[15%] ">
        <label htmlFor="title" className="text-lg font-bold">
          Title
        </label>
        <input
          onChange={handleInputChange}
          value={inputValue.title}
          type="text"
          name="title"
          id="title"
          className="w-[100%] border  px-3 py-1 text-lg font-bold"
        />
      </div>
      <div className="w-[25%] ">
        <label htmlFor="desc" className="text-lg font-bold">
          Description
        </label>
        <input
          onChange={handleInputChange}
          value={inputValue.desc}
          type="text"
          name="desc"
          id="desc"
          className="w-[100%] border px-3 py-1 text-lg "
        />
      </div>
      <div>
        <button
          onClick={addTask}
          className="bg-amber-500 active:bg-amber-600 transition-all font-bold text-black text-lg px-5 py-1"
        >
          {selectedTask ? 'Update' : 'Add Task'}
        </button>
      </div>
    </div>
  );
}
