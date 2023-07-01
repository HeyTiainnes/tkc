// import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export type Task = {
    id: number;
    designation: string;
    deadline: string;
    notes: string;
    done: boolean;
};

const TaskLists = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3000/tasks", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleDone = (taskId: number) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, done: !task.done };
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const handleDelete = (taskId: number) => {
        axios
            .delete(`http://localhost:3000/tasks/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then(() => {
                const updatedTasks = tasks.filter((task) => task.id !== taskId);
                setTasks(updatedTasks);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleAddSubtask = (taskId: number) => {
        navigate(`/NewCheckList/${taskId}`);
    };

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => handleDone(task.id)}
                        />
                        <span>{task.designation}</span>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                        <button onClick={() => handleAddSubtask(task.id)}>Add Subtask</button>
                        <Link to={`/TaskDetails/${task.id}`}>View Subtasks</Link>
                    </li>
                ))}
            </ul>
            <Link to="/NewTask">New Task</Link>
        </div>
    );
};

export default TaskLists;
