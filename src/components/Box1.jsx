import React from "react";

const Box1 = ({
  input,
  setInput,
  addTodo,
  activeBtn,
  setActiveBtn,
  filteredTasks = [],
  toggleCompleted,
  deleteTodo,
  todos = [],
  setTodos,
}) => {
  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

  const clearCompleted = () => {
    if (window.confirm("Are you sure you want to clear all completed tasks?")) {
      setTodos(todos.filter((t) => !t.completed));
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[377px] rounded-lg py-6 flex flex-col items-center gap-5 bg-neutral-50 relative">
        <h1 className="text-black text-xl flex gap-5 font-bold">To-Do List</h1>

        {/* Input + Add */}
        <div className="flex w-[377px] gap-2 justify-center items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a new task..."
            className="w-[280px] p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="w-[59px] h-[40px] rounded-lg text-sm bg-blue-500 text-white"
          >
            Add
          </button>
        </div>

        {/* Filter buttons */}
        <div className="flex text-xs w-[340px] gap-2 mt-4">
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

        {/* Todo List */}
        <ul className="space-y-2 flex flex-col gap-3 w-[340px]">
          {filteredTasks.length === 0 ? (
            <li className="text-gray-600 text-sm px-3">
              {todos.length === 0 ? "" : ""}
            </li>
          ) : (
            filteredTasks.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 border border-gray-200"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                  className="mr-2 mt-1 h-5 w-5 flex-shrink-0"
                />
                <span
                  className={`flex-grow min-w-0 break-words ${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this task?",
                      )
                    ) {
                      deleteTodo(todo.id);
                    }
                  }}
                  className="ml-2 p-1 rounded-lg bg-red-100"
                >
                  <span className="text-red-600">Delete</span>
                </button>
              </li>
            ))
          )}
        </ul>

        {/* Footer */}
        <div className="flex justify-between justify-center gap-20 items-center w-[340px] mt-4">
          {todos.length === 0 ? (
            <p className="text-sm text-gray-700 font-bold">
              No tasks yet. Add one above!
            </p>
          ) : (
            <>
              <p className="text-sm text-gray-700 font-bold">
                {todos.filter((t) => t.completed).length} of {todos.length}{" "}
                tasks completed
              </p>

              {/* Clear Completed button */}
              <button
                onClick={clearCompleted}
                className="text-sm text-red-600 hover:underline"
              >
                Clear Completed
              </button>
            </>
          )}
        </div>

        <h1 className="text-black text-xs mt-3">
          Powered by <span className="text-blue-500">Pinecone Academy</span>
        </h1>
      </div>
    </div>
  );
};

export default Box1;
