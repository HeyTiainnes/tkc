
// import React, { useState, useEffect, useRef } from 'react';
// import { Task } from './TaskLists';
// import './NewTask.css';
// import axios from 'axios';

// type PatchTaskProps = {
//     taskId: number;
// };

// const PatchTask: React.FC<PatchTaskProps> = ({ taskId }) => {
//     const [task, setTask] = useState<Task>({
//         id: 0,
//         designation: '',
//         dead_line: '',
//         notes: '',
//         done: false,
//     });
//     const designationRef = useRef<HTMLInputElement>(null);
//     const deadlineRef = useRef<HTMLInputElement>(null);
//     const notesRef = useRef<HTMLTextAreaElement>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get<Task>(`http://localhost:3000/Tasks/${taskId}`);
//                 setTask(response.data);
//                 if (designationRef.current) {
//                     designationRef.current.value = response.data.designation;
//                 }
//                 if (deadlineRef.current) {
//                     deadlineRef.current.value = response.data.dead_line;
//                 }
//                 if (notesRef.current) {
//                     notesRef.current.value = response.data.notes;
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchData();
//     }, [taskId]);

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const data = {
//             designation: designationRef.current?.value ?? '',
//             dead_line: deadlineRef.current?.value ?? '',
//             notes: notesRef.current?.value ?? '',
//         };
//         try {
//             await axios.patch(`http://localhost:3000/Tasks/${taskId}`, data);
//             window.location.href = '/';
//         } catch (error) {
//             console.error('Error updating task:', error);
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
//                     defaultValue={task.designation}
//                     ref={designationRef}
//                 />
//                 <br />

//                 <label htmlFor="dead_line">Deadline</label>
//                 <br />
//                 <input
//                     type="date"
//                     id="dead_line"
//                     name="dead_line"
//                     required
//                     pattern="\d{4}-\d{2}-\d{2}"
//                     placeholder="YYYY-MM-DD"
//                     defaultValue={task.dead_line}
//                     ref={deadlineRef}
//                 />
//                 <br />

//                 <label htmlFor="notes">Notes (255 characters max)</label>
//                 <br />
//                 <textarea
//                     id="notes"
//                     name="notes"
//                     maxLength={255}
//                     defaultValue={task.notes}
//                     ref={notesRef}
//                 />
//                 <div className="buttons">
//                     <button type="reset" id="cancel">
//                         Cancel
//                     </button>
//                     <button type="submit" id="submit">
//                         Update
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default PatchTask;
import React, { useState, useEffect, useRef } from 'react';
import { Task } from './TaskLists';
import './NewTask.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type PatchTaskProps = {
    task: Task;
};

const PatchTask: React.FC<PatchTaskProps> = ({ task }) => {
    const { id } = useParams<{ id: string }>();
    const [currentTask, setCurrentTask] = useState<Task>(task);
    const designationRef = useRef<HTMLInputElement>(null);
    const deadlineRef = useRef<HTMLInputElement>(null);
    const notesRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Task>(`http://localhost:3000/Tasks/${id}`);
                setCurrentTask(response.data);
                if (designationRef.current) {
                    designationRef.current.value = response.data.designation;
                }
                if (deadlineRef.current) {
                    deadlineRef.current.value = response.data.dead_line;
                }
                if (notesRef.current) {
                    notesRef.current.value = response.data.notes;
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            designation: designationRef.current?.value ?? '',
            dead_line: deadlineRef.current?.value ?? '',
            notes: notesRef.current?.value ?? '',
        };
        try {
            await axios.patch(`http://localhost:3000/Tasks/${id}`, data);
            window.location.href = '/';
        } catch (error) {
            console.error('Error updating task:', error);
        }
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
                    defaultValue={currentTask.designation}
                />
                <br />

                <label htmlFor="dead_line">Deadline</label>
                <br />
                <input
                    type="date"
                    id="dead_line"
                    name="dead_line"
                    required
                    pattern="\d{4}-\d{2}-\d{2}"
                    placeholder="YYYY-MM-DD"
                    defaultValue={currentTask.dead_line}
                    ref={deadlineRef}
                />
                <br />

                <label htmlFor="notes">Notes (255 characters max)</label>
                <br />
                <textarea
                    id="notes"
                    name="notes"
                    maxLength={255}
                    ref={notesRef}
                    defaultValue={currentTask.notes}
                />
                <div className="buttons">
                    <button type="reset" id="cancel">
                        Cancel
                    </button>
                    <button type="submit" id="submit">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PatchTask;
