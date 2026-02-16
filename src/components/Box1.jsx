import React from "react";
const Box1 = ({
  input,
  setInput,
  addTodo,
  activeBtn,
  setActiveBtn,
  filteredTasks,
  toggleCompleted,
  deleteTodo,
}) => {
  return (
    <div>
      <div className="flex relative justify-center">
        <div className="w-[377px] rounded-lg h-auto py-6 flex justify-center items-center flex-col gap-5 bg-neutral-50 absolute top-15">
          <h1 className="text-black text-xl flex gap-5 font-bold">
            To-Do List
          </h1>
          <div className="flex flex-col items-center">
            <div className="flex w-[377px] text-sm  gap-2 items-center justify-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Add a new task..."
                className="w-[280px] p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={addTodo}
                className="w-[59px] rounded-lg text-sm h-[40px] bg-blue-500 text-white"
              >
                Add
              </button>
            </div>
            <div className="flex text-xs 0 w-[340px]  gap-2 mt-4">
              <button
                onClick={() => setActiveBtn(1)}
                className={`w-[38px] h-[32px] text-white rounded ${
                  activeBtn === 1 ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveBtn(2)}
                className={`w-[59px] h-[32px] text-white rounded ${
                  activeBtn === 2 ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setActiveBtn(3)}
                className={`px-3 py-1 text-white rounded ${
                  activeBtn === 3 ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                Completed
              </button>
            </div>
          </div>
          <ul className="space-y-2">
            {filteredTasks.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                  className="mr-2 h-5 w-5 text-blue-600"
                />
                <span
                  className={`flex-grow ${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="ml-2 p-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <h1 className="text-black text-sm">No tasks yet. Add one above!</h1>

          <h1 className="text-black text-xs">
            Powered by <span className="text-blue-500">Pinecone Academy</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Box1;
