import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const App = () => {
  // State (Estado) - é uma variável que pode ser alterada e que, quando alterada, faz com que o componente seja renderizado novamente.
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  };

  const onDeleteTaskClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const onAddTaskSubmit = (title, description) => {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="w-screen h-screen bg-neutral-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-white font-bold text-center">
          Lista de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
};

export default App;
