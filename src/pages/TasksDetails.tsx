// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Task } from './TaskLists';

// type Subtask = {
//     id: number;
//     name: string;
// };

// type TaskDetailParams = {
//     taskId: string;
// };

// const TaskDetail = () => {
//     const { taskId } = useParams<TaskDetailParams>();
//     const [task, setTask] = useState<Task | null>(null);
//     const [subtasks, setSubtasks] = useState<Subtask[]>([]);

//     useEffect(() => {
//         // Récupérer les détails de la tâche
//         axios
//             .get(`http://localhost:3000/Tasks/${taskId}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//             })
//             .then((response) => {
//                 setTask(response.data);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });

//         // Récupérer les sous-tâches liées à la tâche
//         axios
//             .get(`http://localhost:3000/Tasks/${taskId}/subtasks`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//             })
//             .then((response) => {
//                 setSubtasks(response.data);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }, [taskId]);

//     const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setTask((prevTask) => ({
//             ...prevTask!,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const handleSubtaskChange = (subtaskId: number, e: React.ChangeEvent<HTMLInputElement>) => {
//         const updatedSubtasks = subtasks.map((subtask) =>
//             subtask.id === subtaskId ? { ...subtask, name: e.target.value } : subtask
//         );
//         setSubtasks(updatedSubtasks);
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         // Mettre à jour la tâche
//         axios
//             .put(`http://localhost:3000/Tasks/${taskId}`, task, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//             })
//             .then((response) => {
//                 console.log('Task updated successfully!');
//             })
//             .catch((error) => {
//                 console.error('Error updating task:', error);
//             });

//         // Mettre à jour les sous-tâches
//         axios
//             .put(`http://localhost:3000/Tasks/${taskId}/subtasks`, subtasks, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//             })
//             .then((response) => {
//                 console.log('Subtasks updated successfully!');
//             })
//             .catch((error) => {
//                 console.error('Error updating subtasks:', error);
//             });
//     };

//     if (!task) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>Task Details</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="designation">
//                     Designation<span className="required">*</span>
//                 </label>
//                 <br />
//                 <input
//                     type="text"
//                     id="designation"
//                     name="designation"
//                     value={task.designation}
//                     onChange={handleTaskChange}
//                     required
//                 />
//                 <br />
//                 <label htmlFor="dead_line">Deadline</label>
//                 <br />
//                 <input
//                     type="date"
//                     id="dead_line"
//                     name="dead_line"
//                     pattern="\d{4}-\d{2}-\d{2}"
//                     placeholder="YYYY-MM-DD"
//                     value={task.dead_line}
//                     onChange={handleTaskChange}
//                 />
//                 <br />
//                 <label htmlFor="notes">Notes</label>
//                 <br />
//                 <textarea
//                     id="notes"
//                     name="notes"
//                     value={task.notes}
//                     onChange={handleTaskChange}
//                 ></textarea>
//                 <br />

//                 <h2>Subtasks</h2>
//                 {subtasks.map((subtask) => (
//                     <div key={subtask.id}>
//                         <label htmlFor={`subtaskName${subtask.id}`}>
//                             Name of Subtask {subtask.id}
//                         </label>
//                         <br />
//                         <input
//                             type="text"
//                             id={`subtaskName${subtask.id}`}
//                             name={`subtaskName${subtask.id}`}
//                             value={subtask.name}
//                             onChange={(e) => handleSubtaskChange(subtask.id, e)}
//                             required
//                         />
//                         <br />
//                     </div>
//                 ))}

//                 <button type="submit">Save</button>
//             </form>
//         </div>
//     );
// };

// export default TaskDetail;

import { Task } from './TaskLists';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type Subtask = {
    id: number;
    name: string;
};

type TaskDetailParams = {
    taskId: string;
};

const TaskDetail = () => {
    const { taskId } = useParams<TaskDetailParams>();
    const [task, setTask] = useState<Task | null>(null);
    const [subtasks, setSubtasks] = useState<Subtask[]>([]);

    useEffect(() => {
        // Récupérer les détails de la tâche
        axios
            .get(`http://localhost:3000/Tasks/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            })
            .then((response) => {
                setTask(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        // Récupérer les sous-tâches liées à la tâche
        axios
            .get(`http://localhost:3000/Tasks/${taskId}/subtasks`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            })
            .then((response) => {
                setSubtasks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [taskId]);

    const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask((prevTask) => ({
            ...prevTask!,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubtaskChange = (subtaskId: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedSubtasks = subtasks.map((subtask) =>
            subtask.id === subtaskId ? { ...subtask, name: e.target.value } : subtask
        );
        setSubtasks(updatedSubtasks);
    };

    const handleAddSubtask = () => {
        const newSubtask: Subtask = {
            id: subtasks.length + 1,
            name: '',
        };
        setSubtasks((prevSubtasks) => [...prevSubtasks, newSubtask]);
    };

    const handleRemoveSubtask = (subtaskId: number) => {
        const updatedSubtasks = subtasks.filter((subtask) => subtask.id !== subtaskId);
        setSubtasks(updatedSubtasks);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Mettre à jour la tâche
        axios
            .put(`http://localhost:3000/Tasks/${taskId}`, task, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            })
            .then((response) => {
                console.log('Task updated successfully!');
            })
            .catch((error) => {
                console.error('Error updating task:', error);
            });

        // Mettre à jour les sous-tâches
        axios
            .put(`http://localhost:3000/Tasks/${taskId}/CheckListItems`, subtasks, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            })
            .then((response) => {
                console.log('Subtasks updated successfully!');
            })
            .catch((error) => {
                console.error('Error updating subtasks:', error);
            });
    };

    if (!task) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Task Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="designation">
                    Designation<span className="required">*</span>
                </label>
                <br />
                <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={task.designation}
                    onChange={handleTaskChange}
                    required
                />
                <br />
                <label htmlFor="dead_line">Deadline</label>
                <br />
                <input
                    type="date"
                    id="dead_line"
                    name="dead_line"
                    pattern="\d{4}-\d{2}-\d{2}"
                    placeholder="YYYY-MM-DD"
                    value={task.dead_line}
                    onChange={handleTaskChange}
                />
                <br />
                <label htmlFor="notes">Notes</label>
                <br />
                <textarea id="notes" name="notes" value={task.notes} onChange={handleTaskChange}></textarea>
                <br />

                <h2>Subtasks</h2>
                {subtasks.map((subtask) => (
                    <div key={subtask.id}>
                        <label htmlFor={`subtaskName${subtask.id}`}>Name of Subtask {subtask.id}</label>
                        <br />
                        <input
                            type="text"
                            id={`subtaskName${subtask.id}`}
                            name={`subtaskName${subtask.id}`}
                            value={subtask.name}
                            onChange={(e) => handleSubtaskChange(subtask.id, e)}
                            required
                        />
                        <button type="button" onClick={() => handleRemoveSubtask(subtask.id)}>
                            Remove Subtask
                        </button>
                        <br />
                    </div>
                ))}

                <button type="button" onClick={handleAddSubtask}>
                    Add Subtask
                </button>

                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default TaskDetail;
