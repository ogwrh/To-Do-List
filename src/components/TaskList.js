import Task from "./Task";

function TaskList({ tasks, setToDos }) {
  const handleDeletion = (id) => {
    setToDos(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            handleDeletion={() => handleDeletion(task.id)}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
