import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type Subtask = {
    id: number;
    name: string;
};

type Task = {
    id: number;
    designation: string;
    deadline: string;
    notes: string;
    subtasks: Subtask[];
};

type TaskDetailParams = {
    taskId: string;
};

const TaskDetail: React.FC = () => {
    const { taskId } = useParams<TaskDetailParams>();
    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get<Task>(`http://localhost:3000/Tasks/${taskId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });
                setTask(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTask();
    }, [taskId]);

    const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTask((prevTask) => prevTask && { ...prevTask, [name]: value });
    };

    const handleSubtaskChange = (subtaskId: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTask((prevTask) => {
            if (prevTask) {
                const updatedSubtasks = prevTask.subtasks.map((subtask) =>
                    subtask.id === subtaskId ? { ...subtask, name: value } : subtask
                );
                return { ...prevTask, subtasks: updatedSubtasks };
            }
            return null;
        });
    };

    const handleAddSubtask = () => {
        setTask((prevTask) => {
            if (prevTask) {
                const newSubtask: Subtask = {
                    id: prevTask.subtasks.length + 1,
                    name: '',
                };
                const updatedSubtasks = [...prevTask.subtasks, newSubtask];
                return { ...prevTask, subtasks: updatedSubtasks };
            }
            return null;
        });
    };

    const handleRemoveSubtask = (subtaskId: number) => {
        setTask((prevTask) => {
            if (prevTask) {
                const updatedSubtasks = prevTask.subtasks.filter((subtask) => subtask.id !== subtaskId);
                return { ...prevTask, subtasks: updatedSubtasks };
            }
            return null;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const updateTask = async () => {
            try {
                await axios.patch(`http://localhost:3000/Tasks/${taskId}`, task, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });
                console.log('Task updated successfully!');
            } catch (error) {
                console.error('Error updating task:', error);
            }
        };

        const updateSubtasks = async () => {
            try {
                await axios.patch(`http://localhost:3000/checkListItems?tasksId=${taskId}`, task?.subtasks, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });
                console.log('Subtasks updated successfully!');
            } catch (error) {
                console.error('Error updating subtasks:', error);
            }
        };

        if (task) {
            updateTask();
            updateSubtasks();
        }
    };

    if (!task) {
        return <div>Loading task...</div>;
    }

    return (
        <div>
            <h2>Task Detail</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Designation:</label>
                    <input
                        type="text"
                        name="designation"
                        value={task.designation}
                        onChange={handleTaskChange}
                    />
                </div>
                <div>
                    <label>Deadline:</label>
                    <input
                        type="text"
                        name="deadline"
                        value={task.deadline}
                        onChange={handleTaskChange}
                    />
                </div>
                <div>
                    <label>Notes:</label>
                    <textarea name="notes" value={task.notes} onChange={handleTaskChange} />
                </div>
                <div>
                    <h3>Subtasks:</h3>
                    {task.subtasks.map((subtask) => (
                        <div key={subtask.id}>
                            <input
                                type="text"
                                value={subtask.name}
                                onChange={(e) => handleSubtaskChange(subtask.id, e)}
                            />
                            <button type="button" onClick={() => handleRemoveSubtask(subtask.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddSubtask}>
                        Add Subtask
                    </button>
                </div>
                <button type="submit">Update Task</button>
            </form>
        </div>
    );
};

export default TaskDetail;