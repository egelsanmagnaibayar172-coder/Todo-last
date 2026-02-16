import Box1 from "@/components/Box1";
import { useState } from "react";

function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [activeBtn, setActiveBtn] = useState(1);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filteredTasks =
    activeBtn === 1
      ? todos
      : activeBtn === 2
      ? todos.filter((t) => !t.completed)
      : todos.filter((t) => t.completed);

  return (
    <div>
      <Box1
        input={input}
        setInput={setInput}
        addTodo={addTodo}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        filteredTasks={filteredTasks}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default Home;
