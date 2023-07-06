import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TaskLists.css';
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
                `http://localhost:3000/checkListItems/${tasksId}`,
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

    const handleRemoveCheckListItem = async (checkListItemId: number) => {
        try {
            await axios.delete(`http://localhost:3000/checkListItems/${checkListItemId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            const updatedTasks = tasks.map((task) => {
                if (task.checkListItems) {
                    const updatedCheckListItems = task.checkListItems.filter(
                        (item) => item.id !== checkListItemId
                    );
                    return { ...task, checkListItems: updatedCheckListItems };
                }
                return task;
            });

            setTasks(updatedTasks);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Task Lists</h2>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.designation}</h3>
                    <p>{task.deadline}</p>
                    <p>{task.notes}</p>
                    <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => handleDone(task.id)}
                    />
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                    <button onClick={() => fetchCheckListItems(task.id)}>Show CheckList</button>
                    {task.checkListItems &&
                        task.checkListItems.map((item) => (
                            <div key={item.id}>
                                <p>{item.name}</p>
                                <input
                                    type="checkbox"
                                    onChange={() => handleDoneCheckListItem(task.id, item.id)}
                                />
                                <button onClick={() => handleRemoveCheckListItem(item.id)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    <button onClick={() => handleAddCheckListItem(task.id)}>
                        Add CheckList Item
                    </button>
                    <hr />
                </div>
            ))}
            <Link to="/NewTask">Create Task</Link>
        </div>
    );
};

export default TaskLists;