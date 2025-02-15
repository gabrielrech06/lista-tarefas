import { ChevronRightIcon } from "lucide-react";

const Tasks = (props) => {
  return (
    <ul className="space-y-4 p-6 bg-neutral-400 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button className="bg-neutral-500 w-full text-white p-2 rounded-md">{task.title}</button>
          <button className="bg-neutral-500 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
