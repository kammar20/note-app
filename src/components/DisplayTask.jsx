export default function DisplayTask({
  taskList,
  doneTask,
  deleteTask,
  taskToUpdate,
}) {
  console.log(taskList);
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-5">
        {taskList.map((task) => (
          <div
            key={task.id}
            className={`w-[28%] ${
              task.taskDone ? 'bg-gray-700' : 'bg-gray-800'
            }  p-5`}
          >
            <h3
              className={`text-xl font-bold mb-2 ${
                task.taskDone ? 'line-through text-gray-400' : ''
              }`}
            >
              {task.title}
            </h3>
            <p
              className={`text-lg mb-5 ${
                task.taskDone ? 'line-through text-gray-400' : ''
              }`}
            >
              {task.desc}
            </p>

            {/* Button Group */}
            <div className="flex gap-5">
              {/* Edit Button */}
              <button
                onClick={() => taskToUpdate(task.id)}
                className="px-3 py-0.5 text-lg font-bold bg-green-700 active:bg-green-800 transition-all"
              >
                Edit
              </button>

              {/* Done Button */}
              <button
                onClick={() => doneTask(task.id)}
                className="px-3 py-0.5 text-lg font-bold bg-blue-700 active:bg-blue-800 transition-all"
              >
                Done
              </button>

              {/* Delete Button */}
              <button
                onClick={() => deleteTask(task.id)}
                className="px-3 py-0.5 text-lg font-bold bg-red-700 active:bg-red-800 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
