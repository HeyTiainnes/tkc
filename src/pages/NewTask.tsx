
// import { FormEvent, useRef, useState } from "react";
// import axios from "axios";
// import { Task } from "./TaskLists";
// import { useNavigate } from "react-router-dom"; // Importer le hook useNavigate pour la navigation
// import './NewTask.css';

// type NewTaskProps = {
//     task: Task;
// };

// const NewTask = ({ task }: NewTaskProps) => {
//     const designationRef = useRef<HTMLInputElement>(null);
//     const deadlineRef = useRef<HTMLInputElement>(null);
//     const notesRef = useRef<HTMLTextAreaElement>(null);
//     const [designation, setDesignation] = useState<string>(task.designation);
//     const [deadline, setDeadline] = useState<string>(task.dead_line);
//     const [notes, setNotes] = useState<string>(task.notes);
//     const navigate = useNavigate(); // Initialiser le hook useNavigate

//     const handleSubmit = (e: FormEvent) => {
//         console.log(localStorage.getItem('accessToken'));
//         e.preventDefault();
//         const data = {
//             designation: designation,
//             dead_line: deadline,
//             notes: notes,
//         };
//         axios
//             .post(
//                 'http://localhost:3000/Tasks',
//                 data,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                     },
//                 }
//             )
//             .then(() => {
//                 window.location.href = "/";
//             })
//             .catch((error) => {
//                 console.error("erreur lors de l'envoi:", error);
//             });
//     };

//     const handleSubtasks = () => {
//         navigate("/NewCheckList"); // Naviguer vers la page NewCheckList.tsx
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="designation">
//                     Designation<span className="required">*</span>
//                 </label>
//                 <br />
//                 <input
//                     type="text"
//                     id="designation"
//                     name="designation"
//                     required
//                     ref={designationRef}
//                     defaultValue={designation}
//                     onChange={(e) => setDesignation(e.target.value)}
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
//                     defaultValue={deadline}
//                     onChange={(e) => setDeadline(e.target.value)}
//                     ref={deadlineRef}
//                 />
//                 <br />

//                 <label htmlFor="notes">Notes (255 characters max)</label>
//                 <br />
//                 <textarea
//                     id="notes"
//                     name="notes"
//                     maxLength={255}
//                     ref={notesRef}
//                     defaultValue={notes}
//                     onChange={(e) => setNotes(e.target.value)}
//                 />
//                 <div className="buttons">
//                     <button type="reset" id="cancel">
//                         Cancel
//                     </button>
//                     <button type="submit" id="submit">
//                         Validate
//                     </button>
//                     <button type="button" id="subtasks" onClick={handleSubtasks}>
//                         Sous-tâches
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default NewTask;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { FormEvent, useRef, useState } from "react";
// import axios from "axios";
// import { Task } from "./TaskLists";
// import { useNavigate } from "react-router-dom";
// import "./NewTask.css";

// type Subtask = {
//     name: string;
//     notes: string;
// };

// type NewTaskProps = {
//     task: Task;
// };

// const NewTask = ({ task }: NewTaskProps) => {
//     const designationRef = useRef<HTMLInputElement>(null);
//     const deadlineRef = useRef<HTMLInputElement>(null);
//     const notesRef = useRef<HTMLTextAreaElement>(null);
//     const [designation, setDesignation] = useState<string>(task.designation);
//     const [deadline, setDeadline] = useState<string>(task.dead_line);
//     const [notes, setNotes] = useState<string>(task.notes);
//     const [subtasks, setSubtasks] = useState<Subtask[]>([]);
//     const navigate = useNavigate();

//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         const data = {
//             designation: designation,
//             dead_line: deadline,
//             notes: notes,
//             subtasks: subtasks,
//         };
//         axios
//             .post(
//                 'http://localhost:3000/Tasks',
//                 data,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                     },
//                 }
//             )
//             .then(() => {
//                 window.location.href = "/";
//             })
//             .catch((error) => {
//                 console.error("erreur lors de l'envoi:", error);
//             });
//     };

//     const handleSubtaskSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         const name = designationRef.current?.value;
//         const subtaskNotes = notesRef.current?.value;
//         if (name) {
//             const newSubtask: Subtask = {
//                 name: name,
//                 notes: subtaskNotes || "",
//             };
//             setSubtasks([...subtasks, newSubtask]);
//             designationRef.current!.value = "";
//             notesRef.current!.value = "";
//         }
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="designation">
//                     Designation<span className="required">*</span>
//                 </label>
//                 <br />
//                 <input
//                     type="text"
//                     id="designation"
//                     name="designation"
//                     required
//                     ref={designationRef}
//                     defaultValue={designation}
//                     onChange={(e) => setDesignation(e.target.value)}
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
//                     defaultValue={deadline}
//                     onChange={(e) => setDeadline(e.target.value)}
//                     ref={deadlineRef}
//                 />
//                 <br />

//                 <label htmlFor="notes">Notes (255 characters max)</label>
//                 <br />
//                 <textarea
//                     id="notes"
//                     name="notes"
//                     maxLength={255}
//                     ref={notesRef}
//                     defaultValue={notes}
//                     onChange={(e) => setNotes(e.target.value)}
//                 />
//                 <div className="buttons">
//                     <button type="reset" id="cancel">
//                         Cancel
//                     </button>
//                     <button type="submit" id="submit">
//                         Validate
//                     </button>
//                     <button type="button" id="subtasks" onClick={handleSubtaskSubmit}>
//                         Sous-tâches
//                     </button>
//                 </div>
//             </form>

//             <div className="subtask-form">
//                 <h2>Ajouter une sous-tâche</h2>
//                 <form onSubmit={handleSubtaskSubmit}>
//                     <label htmlFor="subtaskName">Name</label>
//                     <br />
//                     <input type="text" id="subtaskName" ref={designationRef} required />
//                     <br />

//                     <label htmlFor="subtaskNotes">Notes (255 characters max)</label>
//                     <br />
//                     <textarea
//                         id="subtaskNotes"
//                         maxLength={255}
//                         ref={notesRef}
//                     ></textarea>
//                     <br />

//                     <button type="submit">Enregistrer</button>
//                     <button type="button">Ajouter</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default NewTask;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
import { FormEvent, useRef, useState } from "react";
import axios from "axios";
import { Task } from "./TaskLists";
import { useNavigate } from "react-router-dom";
import './NewTask.css';

type Subtask = {
    name: string;
};

type NewTaskProps = {
    task: Task;
};

const NewTask = ({ task }: NewTaskProps) => {
    const designationRef = useRef<HTMLInputElement>(null);
    const deadlineRef = useRef<HTMLInputElement>(null);
    const [designation, setDesignation] = useState<string>(task.designation);
    const [deadline, setDeadline] = useState<string>(task.dead_line);
    const [subtasks, setSubtasks] = useState<Subtask[]>([]);
    const navigate = useNavigate();

    const handleSubtaskAdd = () => {
        setSubtasks([...subtasks, { name: "" }]);
    };

    const handleSubtaskNameChange = (index: number, value: string) => {
        const updatedSubtasks = [...subtasks];
        updatedSubtasks[index].name = value;
        setSubtasks(updatedSubtasks);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = {
            designation: designation,
            dead_line: deadline,
            subtasks: subtasks.map(subtask => ({ name: subtask.name })),
        };

        axios
            .post(
                'http://localhost:3000/Tasks',
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }
            )
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("erreur lors de l'envoi:", error);
            });
    };

    const handleSubtaskSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = {
            taskId: task.id,
            subtasks: subtasks.map(subtask => ({ name: subtask.name })),
        };

        axios
            .post(
                'http://localhost:3000/CheckListItems',
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }
            )
            .then(() => {
                // Clear subtasks after submission
                setSubtasks([]);
            })
            .catch((error) => {
                console.error("erreur lors de l'envoi des sous-tâches:", error);
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="designation">
                    Designation<span className="required">*</span>
                </label>
                <br />
                <input
                    type="text"
                    id="designation"
                    name="designation"
                    required
                    ref={designationRef}
                    defaultValue={designation}
                    onChange={(e) => setDesignation(e.target.value)}
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
                    defaultValue={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    ref={deadlineRef}
                />
                <br />

                <div className="buttons">
                    <button type="reset" id="cancel">
                        Cancel
                    </button>
                    <button type="submit" id="submit">
                        Validate
                    </button>
                    <button type="button" id="subtasks" onClick={handleSubtaskAdd}>
                        Sous-tâches
                    </button>
                </div>
            </form>

            {/* Formulaire de sous-tâches */}
            {subtasks.length > 0 && (
                <form onSubmit={handleSubtaskSubmit}>
                    <h2>Sous-tâches</h2>
                    {subtasks.map((subtask, index) => (
                        <div key={index}>
                            <label htmlFor={`subtaskName${index}`}>
                                Nom de la sous-tâche {index + 1}
                            </label>
                            <br />
                            <input
                                type="text"
                                id={`subtaskName${index}`}
                                name={`subtaskName${index}`}
                                value={subtask.name}
                                onChange={(e) => handleSubtaskNameChange(index, e.target.value)}
                                required
                            />
                            <br />
                        </div>
                    ))}

                    <button type="submit">Enregistrer sous-tâche</button>
                </form>
            )}
        </div>
    );
};

export default NewTask;
