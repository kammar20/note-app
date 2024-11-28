import { useEffect, useState } from 'react';
import CreateTask from './components/CreateTask';
import DisplayTask from './components/DisplayTask';

const App = () => {
  const [inputValue, setInputValue] = useState({ title: '', desc: '' });
  const [taskList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  // If User Click Edit Button Polute the input field with task value
  useEffect(() => {
    if (selectedTask) {
      setInputValue({ title: selectedTask.title, desc: selectedTask.desc });
    }
  }, [selectedTask]);

  // Task Which Need To Update, assige it to selected Task
  function taskToUpdate(id) {
    const task = taskList.find((task) => task.id === id);
    if (task !== undefined) {
      setSelectedTask(task);
    }
  }

  // Add Task To Task List
  function addTask() {
    // If Update Task
    if (selectedTask) {
      const updateData = taskList.map((task) =>
        task.id === selectedTask.id
          ? { ...inputValue, id: selectedTask.id }
          : task
      );

      setTaskList(updateData);
    } else {
      // Add new Task
      if (inputValue.title.trim() === '' || inputValue.desc.trim() === '') {
        alert('Enter valid task details');
        return;
      }
      setTaskList([
        ...taskList,
        { ...inputValue, id: Date.now(), taskDone: false },
      ]);
    }

    setInputValue({ title: '', desc: '' });
    setSelectedTask(null);
  }

  // Mark Complete Task
  function doneTask(id) {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, taskDone: !task.taskDone } : task
      )
    );
  }

  // Delete Task
  function deleteTask(id) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  return (
    <div className="flex justify-center items-center flex-col pt-24">
      <h1 className="text-4xl mb-12">Todo App</h1>
      <CreateTask
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
        selectedTask={selectedTask}
      />
      <DisplayTask
        taskList={taskList}
        doneTask={doneTask}
        deleteTask={deleteTask}
        taskToUpdate={taskToUpdate}
      />
    </div>
  );
};
export default App;
