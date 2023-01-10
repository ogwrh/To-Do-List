import Task from "./Task";
import {useState, useEffect} from "react";

function TaskList({tasks, onEvent}) {

    const [useDeleteTask, setDeleteTask] = useState(-1)
    const handleCheckbox = (deleteTodoid) => {
        setDeleteTask(deleteTodoid)
    }

    useEffect(() => {
        let newArr = tasks.filter((item, index) => index !== useDeleteTask);
        console.log("Hi ich werde ausgeführt")
        onEvent(newArr)
    }, [useDeleteTask])


    const renderedTaskList = tasks.map((task) => {
        return <Task key={task.id} id={task.id} title={task.title} handleCheckbox={handleCheckbox}/>;
    });
    return <div className="">{renderedTaskList}</div>
}

export default TaskList;