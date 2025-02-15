import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  // State (Estado) - é uma variável que pode ser alterada e que, quando alterada, faz com que o componente seja renderizado novamente.

  return (
    <div className="w-screen h-screen bg-neutral-900 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-200 font-bold text-center">Lista de Tarefas</h1>
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
};

export default App;
