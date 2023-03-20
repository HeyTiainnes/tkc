import { FormEvent, useRef, useState } from "react";
import axios from "axios";
import { Task } from "./TaskLists";
import './NewTask.css';

type NewTaskProps = {
    task: Task;
};

const NewTask = ({ task }: NewTaskProps) => {
    const designationRef = useRef<HTMLInputElement>(null);
    const deadlineRef = useRef<HTMLInputElement>(null);
    const notesRef = useRef<HTMLTextAreaElement>(null);
    const [designation, setDesignation] = useState<string>(task.designation);
    const [deadline, setDeadline] = useState<string>(task.dead_line);
    const [notes, setNotes] = useState<string>(task.notes);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = {
            designation: designation,
            dead_line: deadline,
            notes: notes,
        };
        axios
            .post("http://localhost:3000/Tasks", data)
            .then(() => {
                window.location.href = "/";
            })
            .catch((error) => {
                console.error("erreur lors de l'envoi:", error);
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

                <label htmlFor="notes">Notes (255 characters max)</label>
                <br />
                <textarea
                    id="notes"
                    name="notes"
                    maxLength={255}
                    ref={notesRef}
                    defaultValue={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
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
