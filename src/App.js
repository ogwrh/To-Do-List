import './App.css';
import {useState} from "react";
import DesignCustomizer from './components/DesignCustomizer';
import Input from './components/Input';
import TaskList from './components/TaskList';

function App() {
    const [todos,setToDos] = useState([])
    const handleInputEvent = (inputTasks) => {
        setToDos(inputTasks)
    }

    const handleTaskList = (TaskListTasks) => {
        setToDos(TaskListTasks)
    }
    return (
        <div className="App h-full">
            <div className="Header flex justify-center text-2xl bg-red-600 py-8 shadow-lg">
                <h1>To-Do List</h1>
            </div>
            <DesignCustomizer/>
            <Input onEvent={handleInputEvent} todos={todos}/>
            <TaskList tasks={todos} onEvent={handleTaskList}/>
        </div>
    );
}

export default App;
