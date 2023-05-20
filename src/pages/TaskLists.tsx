import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export type Task = {
    id: number;
    designation: string;
    dead_line: string;
    notes: string;
    done: boolean;
};

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios
            .get('http://localhost:3010/Tasks/all', config)
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleDone = (taskId: number) => {
        const token = localStorage.getItem('accessToken');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios
            .delete(`http://localhost:3010/Tasks/${taskId}`, config)
            .then((response) => {
                setTasks((prevTasks) =>
                    prevTasks.filter((task) => task.id !== taskId)
                );
                console.log(`Task ${taskId} deleted successfully from the database!`);
            })
            .catch((error) => {
                console.error(
                    `Error deleting task ${taskId} from the database:`,
                    error
                );
            });
    };

    return (
        <div>
            <h1>Task List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Designation</th>
                        <th>Deadline</th>
                        <th>Notes</th>
                        <th>Done</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.designation}</td>
                            <td>{task.dead_line}</td>
                            <td>{task.notes}</td>
                            <td>
                                <button onClick={() => handleDone(task.id)}>
                                    {task.done ? 'Undone' : 'Done'}
                                </button>
                            </td>
                            <td>
                                <Link to={`/PatchTask/${task.id}`}>
                                    <button>Modify</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
