import { useState } from "react";

const AddTask = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-neutral-400 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa..."
        className="border border-neutral-500 outline-neutral-600 px-4 py-2 rounded-md bg-white"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa..."
        className="border border-neutral-500 outline-neutral-600 px-4 py-2 rounded-md bg-white"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if(!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa para adicionar uma nova tarefa!")
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
