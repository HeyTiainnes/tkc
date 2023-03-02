import React, { FormEvent, useRef } from "react";
import axios from "axios";

const NewTask = () => {
    const designationRef = useRef<HTMLInputElement>(null);
    const deadlineRef = useRef<HTMLInputElement>(null);
    const notesRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = {
            designation: designationRef.current?.value,
            deadline: deadlineRef.current?.value,
            notes: notesRef.current?.value,
        };

        axios
            .post("http://localhost:3000/Tasks", data)
            .then((response) => {
                console.log("Data sent successfully to the database!");
            })
            .catch((error) => {
                console.error("Error sending data to the database:", error);
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
                />
                <br />

                <label htmlFor="deadline">Deadline</label>
                <br />
                <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    required
                    pattern="\d{4}-\d{2}-\d{2}"
                    placeholder="YYYY-MM-DD"
                    onChange={(event) => {
                        const inputDate = event.target.value;
                        const formattedDate = inputDate
                            ? new Date(inputDate).toISOString().slice(0, 10)
                            : "";
                        if (deadlineRef.current) {
                            deadlineRef.current.value = formattedDate;
                        }
                    }}
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
