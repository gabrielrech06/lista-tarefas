import { ChevronRightIcon, TrashIcon } from "lucide-react";

const Tasks = ({ tasks, onTaskClick, onDeleteTaskClick }) => {
  return (
    <ul className="space-y-4 p-6 bg-neutral-400 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-neutral-500 w-full text-left text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-neutral-500 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-neutral-500 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
