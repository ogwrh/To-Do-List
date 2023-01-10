import { useState } from "react";

let counter = 0;

function Input({ setToDos, todos }) {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setToDos([
      ...todos,
      {
        id: counter++,
        title: task,
      },
    ]);
    setTask("");
  };

  return (
    <div className="flex flex-col justify-center items-center pt-6 w-full h-64">
      <form onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={task}
          type={"text"}
          placeholder={"Enter Text"}
          onChange={handleChange}
        />
        <button className="bg-transparent hover:bg-red-600 text-red-700 font-semibold hover:text-white py-1 mt-3 px-4 border border-red-600 hover:border-transparent rounded">
          Add
        </button>
      </form>
    </div>
  );
}

export default Input;
