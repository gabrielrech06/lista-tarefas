import { useState } from "react";
import Input from "./Input";

const AddTask = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-neutral-400 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert(
              "Preencha o título e a descrição da tarefa para adicionar uma nova tarefa!"
            );
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-neutral-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddTask;
