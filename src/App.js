import { Project } from "./components/Project";
import { Todo } from "./components/Todo";

function App() {
  return (
    <main className="overflow-hidden w-screen h-auto bg-262a41 grid-cols-1 grid lg:grid-cols-2 p-4">
      <div id="dot1" className="hidden md:block dot w-32 h-32 absolute" />

      <Project />

      <Todo />

      <div id="dot2" className="hidden md:block dot w-32 h-14 absolute" />
    </main>
  );
}

export default App;
