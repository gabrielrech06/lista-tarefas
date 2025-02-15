import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
  // State (Estado) - é uma variável que pode ser alterada e que, quando alterada, faz com que o componente seja renderizado novamente.
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para poder criar aplicações web",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Tailwind CSS",
      description: "Estudar Tailwind CSS para poder estilizar as aplicações",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Node.js",
      description: "Estudar Node.js para poder criar aplicações back-end",
      isCompleted: false,
    },
  ]);

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

  return (
    <div className="w-screen h-screen bg-neutral-900 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-200 font-bold text-center">
          Lista de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
};

export default App;
