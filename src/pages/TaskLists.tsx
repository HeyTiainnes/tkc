// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './TaskLists.css';

// export type Task = {
//     id: number;
//     designation: string;
//     deadline: string;
//     notes: string;
//     done: boolean;
//     checkListItems?: CheckListItem[];
// };

// export type CheckListItem = {
//     id: number;
//     name: string;
// };

// const TaskLists = () => {
//     const [tasks, setTasks] = useState<Task[]>([]);
//     const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
//     const [editedTasks, setEditedTasks] = useState<Record<number, Partial<Task>>>({});
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchTasks = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/tasks', {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                     },
//                 });
//                 setTasks(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchTasks();
//     }, []);

//     const handleDone = (taskId: number) => {
//         const updatedTasks = tasks.map((task) => {
//             if (task.id === taskId) {
//                 return { ...task, done: !task.done };
//             }
//             return task;
//         });

//         setTasks(updatedTasks);
//     };

//     const handleDelete = (taskId: number) => {
//         axios
//             .delete(`http://localhost:3000/tasks/${taskId}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//             })
//             .then(() => {
//                 const updatedTasks = tasks.filter((task) => task.id !== taskId);
//                 setTasks(updatedTasks);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };

//     const handleAddCheckListItem = (taskId: number) => {
//         navigate(`/NewCheckList/${taskId}`);
//     };

//     const handleRemoveCheckListItem = async (checkListItemId: number) => {
//         try {
//             await axios.delete(`http://localhost:3000/checkListItems/${checkListItemId}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//             });

//             const updatedTasks = tasks.map((task) => {
//                 if (task.checkListItems) {
//                     const updatedCheckListItems = task.checkListItems.filter((item) => item.id !== checkListItemId);
//                     return { ...task, checkListItems: updatedCheckListItems };
//                 }
//                 return task;
//             });

//             setTasks(updatedTasks);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleEdit = (taskId: number) => {
//         const taskToEdit = tasks.find((task) => task.id === taskId);
//         if (taskToEdit) {
//             setEditedTasks((prevState) => ({
//                 ...prevState,
//                 [taskId]: {
//                     designation: taskToEdit.designation,
//                     deadline: taskToEdit.deadline,
//                     notes: taskToEdit.notes,
//                 },
//             }));
//             setEditingTaskId(taskId);
//         }
//     };

//     const handleSave = (taskId: number) => {
//         const updatedTasks = tasks.map((task) => {
//             if (task.id === taskId) {
//                 return {
//                     ...task,
//                     designation: editedTasks[taskId]?.designation || task.designation,
//                     deadline: editedTasks[taskId]?.deadline || task.deadline,
//                     notes: editedTasks[taskId]?.notes || task.notes,
//                 };
//             }
//             return task;
//         });

//         setTasks(updatedTasks);
//         setEditingTaskId(null);
//     };

//     const handleCancel = () => {
//         setEditingTaskId(null);
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setEditedTasks((prevState) => ({
//             ...prevState,
//             [editingTaskId!]: {
//                 ...prevState[editingTaskId!],
//                 [name]: value,
//             },
//         }));
//     };

//     return (
//         <div>
//             <h5>Liste des tâches et sous-tâches prévues</h5>
//             {tasks.map((task) => (
//                 <div key={task.id}>
//                     {editingTaskId === task.id ? (
//                         <>
//                             <input
//                                 type="text"
//                                 name="designation"
//                                 value={editedTasks[task.id]?.designation || task.designation}
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type="date"
//                                 name="deadline"
//                                 value={editedTasks[task.id]?.deadline || task.deadline}
//                                 onChange={handleInputChange}
//                             />
//                             <textarea
//                                 name="notes"
//                                 value={editedTasks[task.id]?.notes || task.notes}
//                                 onChange={handleInputChange}
//                             />
//                             <button onClick={() => handleSave(task.id)}>Valider</button>
//                             <button onClick={handleCancel}>Annuler</button>
//                         </>
//                     ) : (
//                         <>
//                             <h3>{task.designation}</h3>
//                             <p>{task.deadline}</p>
//                             <p>{task.notes}</p>
//                             <button onClick={() => handleDelete(task.id)}>Delete</button>
//                             {task.checkListItems &&
//                                 task.checkListItems.map((item) => (
//                                     <div key={item.id}>
//                                         <p>{item.name}</p>
//                                         <button onClick={() => handleRemoveCheckListItem(item.id)}>Delete</button>
//                                     </div>
//                                 ))}
//                             <button onClick={() => handleAddCheckListItem(task.id)}>Add CheckList Item</button>
//                             <button onClick={() => handleEdit(task.id)}>Modifier</button>
//                         </>
//                     )}
//                     <hr />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default TaskLists;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editedTasks, setEditedTasks] = useState<Record<number, Partial<Task>>>({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("http://localhost:3000/tasks", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
                setTasks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTasks();
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

    const handleAddCheckListItem = (taskId: number) => {
        navigate(`/NewCheckList/${taskId}`);
    };

    const handleRemoveCheckListItem = async (checkListItemId: number) => {
        try {
            await axios.delete(`http://localhost:3000/checkListItems/${checkListItemId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            const updatedTasks = tasks.map((task) => {
                if (task.checkListItems) {
                    const updatedCheckListItems = task.checkListItems.filter((item) => item.id !== checkListItemId);
                    return { ...task, checkListItems: updatedCheckListItems };
                }
                return task;
            });

            setTasks(updatedTasks);
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (taskId: number) => {
        const taskToEdit = tasks.find((task) => task.id === taskId);
        if (taskToEdit) {
            setEditedTasks((prevState) => ({
                ...prevState,
                [taskId]: {
                    designation: taskToEdit.designation,
                    deadline: taskToEdit.deadline,
                    notes: taskToEdit.notes,
                },
            }));
            setEditingTaskId(taskId);
        }
    };

    const handleSave = (taskId: number) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    designation: editedTasks[taskId]?.designation || task.designation,
                    deadline: editedTasks[taskId]?.deadline || task.deadline,
                    notes: editedTasks[taskId]?.notes || task.notes,
                };
            }
            return task;
        });

        setTasks(updatedTasks);
        setEditingTaskId(null);
    };

    const handleCancel = () => {
        setEditingTaskId(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditedTasks((prevState) => ({
            ...prevState,
            [editingTaskId!]: {
                ...prevState[editingTaskId!],
                [name]: value,
            },
        }));
    };

    return (
        <div>
            <h5>Liste des tâches et sous-tâches prévues</h5>
            {tasks.map((task) => (
                <div key={task.id}>
                    {editingTaskId === task.id ? (
                        <>
                            <input type="text"
                                name="designation"
                                value={editedTasks[task.id]?.designation || task.designation}
                                onChange={handleInputChange}
                            />
                            <input
                                type="date"
                                name="deadline"
                                value={editedTasks[task.id]?.deadline || task.deadline}
                                onChange={handleInputChange}
                            />
                            <textarea
                                name="notes"
                                value={editedTasks[task.id]?.notes || task.notes}
                                onChange={handleInputChange}
                            />
                            <button onClick={() => handleSave(task.id)}>Valider</button>
                            <button onClick={handleCancel}>Annuler</button>
                        </>
                    ) : (
                        <>
                            <h3>{task.designation}</h3>
                            <p>{task.deadline}</p>
                            <p>{task.notes}</p>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                            {task.checkListItems &&
                                task.checkListItems.map((item) => (
                                    <div key={item.id}>
                                        <p>{item.name}</p>
                                        <button onClick={() => handleRemoveCheckListItem(item.id)}>Delete</button>
                                    </div>
                                ))}
                            <button onClick={() => handleAddCheckListItem(task.id)}>Add CheckList Item</button>
                            <button onClick={() => handleEdit(task.id)}>Modifier</button>
                        </>
                    )}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default TaskLists;
