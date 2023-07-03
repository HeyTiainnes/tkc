import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export type Task = {
    id: number;
    designation: string;
    deadline: string;
    notes: string;
    done: boolean;
    checkListItems?: CheckListItem[];
};

export type CheckListItem = {
    id: number;
    name: string;
};

const TaskLists = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tasks', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });
                setTasks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTasks();
    }, []);

    const fetchCheckListItems = async (tasksId: number) => {
        try {
            const response = await axios.get(
                `http://localhost:3000/checkListItems?tasksId=${tasksId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }
            );
            const updatedTasks = tasks.map((task) => {
                if (task.id === tasksId) {
                    return { ...task, checkListItems: response.data };
                }
                return task;
            });
            setTasks(updatedTasks);
        } catch (error) {
            console.error(error);
        }
    };

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
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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

    const handleAddCheckListItem = (taskId: number) => {
        navigate(`/NewCheckList/${taskId}`);
    };

    const handleDoneCheckListItem = (taskId: number, checkListItemId: number) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId && task.checkListItems) {
                const updatedCheckListItems = task.checkListItems.filter(
                    (item) => item.id !== checkListItemId
                );
                return { ...task, checkListItems: updatedCheckListItems };
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    useEffect(() => {
        tasks.forEach((task) => {
            if (!task.checkListItems) {
                fetchCheckListItems(task.id);
            }
        });
    }, [tasks]);

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
                        <button onClick={() => handleAddCheckListItem(task.id)}>
                            Add Check List Item
                        </button>
                        {task.checkListItems && (
                            <ul>
                                {task.checkListItems.map((checkListItem) => (
                                    <li key={checkListItem.id}>
                                        {checkListItem.name}
                                        <button
                                            onClick={() =>
                                                handleDoneCheckListItem(task.id, checkListItem.id)
                                            }
                                        >
                                            Done
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <Link to="/NewTask">New Task</Link>
        </div>
    );
};

export default TaskLists;