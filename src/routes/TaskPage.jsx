import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const TaskPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screnn bg-neutral-900 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-white absolute left-0 top-0 bottom-0 cursor-pointer"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-white font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>

        <div className="bg-neutral-400 p-4 rounded-md">
          <h2 className="text-xl text-neutral-700 font-bold">{title}</h2>
          <p className="text-neutral-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
