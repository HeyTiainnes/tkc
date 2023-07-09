
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./NewTask.css";
// import { FormEvent, useRef, useState } from "react";

// type NewTaskProps = {
//     redirectTo: string;
// };

// const NewTask = ({ redirectTo }: NewTaskProps) => {
//     const designationRef = useRef<HTMLInputElement>(null);
//     const deadlineRef = useRef<HTMLInputElement>(null);
//     const notesRef = useRef<HTMLTextAreaElement>(null);
//     const [designation, setDesignation] = useState<string>("");
//     const [deadline, setDeadline] = useState<string>("");
//     const [notes, setNotes] = useState<string>("");
//     const navigate = useNavigate();

//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         const data = {
//             designation,
//             deadline,
//             notes,
//         };

//         axios
//             .post("http://localhost:3000/tasks", data, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//                 },
//             })
//             .then(() => {
//                 navigate(redirectTo);
//             })
//             .catch((error) => {
//                 console.error("Erreur lors de l'envoi :", error);
//             });
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="designation">Designation<span className="required">*</span></label>
//                 <br />
//                 <input
//                     type="text"
//                     id="designation"
//                     name="designation"
//                     required
//                     ref={designationRef}
//                     value={designation}
//                     onChange={(e) => setDesignation(e.target.value)}
//                 />
//                 <br />
//                 <label htmlFor="deadline">Deadline</label>
//                 <br />
//                 <input
//                     type="date"
//                     id="deadline"
//                     name="deadline"
//                     value={deadline}
//                     onChange={(e) => setDeadline(e.target.value)}
//                     ref={deadlineRef}
//                 />
//                 <br />
//                 <label htmlFor="notes">Notes</label>
//                 <br />
//                 <textarea
//                     id="notes"
//                     name="notes"
//                     maxLength={255}
//                     value={notes}
//                     onChange={(e) => setNotes(e.target.value)}
//                     ref={notesRef}
//                 />
//                 <br />

//                 <div className="buttons">
//                     <button type="reset" id="cancel">Cancel</button>
//                     <button type="submit" id="submit">Validate</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default NewTask;
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./NewTask.css";
// import { FormEvent, useRef, useState } from "react";

// type NewTaskProps = {
//     redirectTo: string;
// };

// const NewTask = ({ redirectTo }: NewTaskProps) => {
//     const designationRef = useRef<HTMLInputElement>(null);
//     const deadlineRef = useRef<HTMLInputElement>(null);
//     const notesRef = useRef<HTMLTextAreaElement>(null);
//     const [designation, setDesignation] = useState<string>("");
//     const [deadline, setDeadline] = useState<string>("");
//     const [notes, setNotes] = useState<string>("");
//     const navigate = useNavigate();

//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         const data = {
//             designation,
//             deadline: deadline || null,
//             notes,
//         };

//         axios
//             .post("http://localhost:3000/tasks", data, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//                 },
//             })
//             .then(() => {
//                 navigate(redirectTo);
//             })
//             .catch((error) => {
//                 console.error("Erreur lors de l'envoi :", error);
//             });
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="designation">Designation<span className="required">*</span></label>
//                 <br />
//                 <input
//                     type="text"
//                     id="designation"
//                     name="designation"
//                     required
//                     ref={designationRef}
//                     value={designation}
//                     onChange={(e) => setDesignation(e.target.value)}
//                 />
//                 <br />
//                 <label htmlFor="deadline">Deadline</label>
//                 <br />
//                 <input
//                     type="date"
//                     id="deadline"
//                     name="deadline"
//                     value={deadline}
//                     onChange={(e) => setDeadline(e.target.value)}
//                     ref={deadlineRef}
//                 />
//                 <br />
//                 <label htmlFor="notes">Notes</label>
//                 <br />
//                 <textarea
//                     id="notes"
//                     name="notes"
//                     maxLength={255}
//                     value={notes}
//                     onChange={(e) => setNotes(e.target.value)}
//                     ref={notesRef}
//                 />
//                 <br />

//                 <div className="buttons">
//                     <button type="reset" id="cancel">Cancel</button>
//                     <button type="submit" id="submit">Validate</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default NewTask;
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./NewTask.css";
// import { FormEvent, useRef, useState } from "react";

// type NewTaskProps = {
//     redirectTo: string;
// };

// const NewTask = ({ redirectTo }: NewTaskProps) => {
//     const designationRef = useRef<HTMLInputElement>(null);
//     const deadlineRef = useRef<HTMLInputElement>(null);
//     const notesRef = useRef<HTMLTextAreaElement>(null);
//     const [designation, setDesignation] = useState<string>("");
//     const [deadline, setDeadline] = useState<string>("");
//     const [notes, setNotes] = useState<string>("");
//     const navigate = useNavigate();

//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         const data = {
//             designation,
//             deadline: deadline, // Ajoutez cette ligne pour envoyer null si la deadline est vide
//             notes,
//         };

//         axios
//             .post("http://localhost:3000/tasks", data, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//                 },
//             })
//             .then(() => {
//                 navigate(redirectTo);
//             })
//             .catch((error) => {
//                 console.error("Erreur lors de l'envoi :", error);
//             });
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="designation">Designation<span className="required">*</span></label>
//                 <br />
//                 <input
//                     type="text"
//                     id="designation"
//                     name="designation"
//                     required
//                     ref={designationRef}
//                     value={designation}
//                     onChange={(e) => setDesignation(e.target.value)}
//                 />
//                 <br />
//                 <label htmlFor="deadline">Deadline</label>
//                 <br />
//                 <input
//                     type="date"
//                     id="deadline"
//                     name="deadline"
//                     value={deadline}
//                     onChange={(e) => setDeadline(e.target.value)}
//                     ref={deadlineRef}
//                 />
//                 <br />
//                 <label htmlFor="notes">Notes</label>
//                 <br />
//                 <textarea
//                     id="notes"
//                     name="notes"
//                     maxLength={255}
//                     value={notes}
//                     onChange={(e) => setNotes(e.target.value)}
//                     ref={notesRef}
//                 />
//                 <br />

//                 <div className="buttons">
//                     <button type="reset" id="cancel">Cancel</button>
//                     <button type="submit" id="submit">Validate</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default NewTask;
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./NewTask.css";
import { FormEvent, useRef, useState } from "react";

type NewTaskProps = {
    redirectTo: string;
};

const NewTask = ({ redirectTo }: NewTaskProps) => {
    const designationRef = useRef<HTMLInputElement>(null);
    const deadlineRef = useRef<HTMLInputElement>(null);
    const notesRef = useRef<HTMLTextAreaElement>(null);
    const [designation, setDesignation] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");
    const [notes, setNotes] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = {
            designation,
            deadline: deadline || undefined,
            notes,
        };

        axios
            .post("http://localhost:3000/tasks", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then(() => {
                navigate(redirectTo);
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi :", error);
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
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                />
                <br />
                <label htmlFor="deadline">Deadline</label>
                <br />
                <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    ref={deadlineRef}
                />
                <br />
                <label htmlFor="notes">Notes</label>
                <br />
                <textarea
                    id="notes"
                    name="notes"
                    maxLength={255}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    ref={notesRef}
                />
                <br />

                <div className="buttons">
                    <button type="reset" id="cancel">
                        Cancel
                    </button>
                    <button type="submit" id="submit">
                        Validate
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewTask;
