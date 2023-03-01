// import React, { FormEvent, useRef, useState } from "react";
// import "./NewTask.css";
// import axios from "axios";

// const NewTask = () => {


//     const designation = useRef<HTMLInputElement>(null);
//     const dead_line = useRef<HTMLInputElement>(null);
//     const duration = useRef<HTMLInputElement>(null);
//     const date_debut_prevue = useRef<HTMLInputElement>(null);
//     //const etat = useRef<HTMLInputElement>(false)
//     const notes = useRef<HTMLTextAreaElement>(null);


//     const handleSubmit = (e: FormEvent) => {
//         // e.preventDefault();
//         // const data = {
//         //     designation,
//         //     deadline,
//         //     duration,
//         //     startDate,
//         //     notes,
//         // };

//         axios
//             .post("/Tasks",)
//             .then((response) => {
//                 console.log("Données envoyées avec succès à la base de données !");
//             })
//             .catch((error) => {
//                 console.error(
//                     "Erreur lors de l'envoi des données à la base de données : ",
//                     error
//                 );
//             });

//     };
//     return (
//         <>
//             <div className="container">
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="designation">
//                         Designation<span className="required">*</span>
//                     </label>
//                     <br />
//                     <input
//                         type="text"
//                         id="designation"
//                         name="designation"
//                         required
//                         ref={designation}
//                     // value={designation}
//                     // onChange={(event) => designation(event.target.value)}
//                     />
//                     <br />

//                     <label htmlFor="deadline">Deadline</label>
//                     <br />
//                     <input
//                         type="date"
//                         id="deadline"
//                         name="deadline"

//                         ref={dead_line}


//                     />
//                     <br />

//                     <label htmlFor="duration">Duration</label>
//                     <br />
//                     <input
//                         type="text"
//                         id="duration"
//                         name="duration"
//                         placeholder="eg. 2d 3h 30m"
//                         ref={duration}
//                     // value={duration}
//                     // onChange={(event) => setDuration(event.target.value)}
//                     />
//                     <br />

//                     <label htmlFor="startdate">Start Date</label>
//                     <br />
//                     <input
//                         type="date"
//                         id="startdate"
//                         name="startdate"
//                         ref={date_debut_prevue}
//                     // value={startDate}
//                     // onChange={(event) => setStartDate(event.target.value)}
//                     />
//                     <br />

//                     <label htmlFor="notes">Notes (255 characters max)</label>
//                     <br />
//                     <textarea
//                         id="notes"
//                         name="notes"
//                         maxLength={255}
//                         ref={notes}
//                     />
//                     <div className="buttons">
//                         <button type="reset" id="cancel">
//                             Cancel
//                         </button>
//                         <button type="submit" id="submit">
//                             Validate
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );

// };

// export default NewTask;
import React, { FormEvent, useRef } from "react";
import "./NewTask.css";
import axios from "axios";

const NewTask = () => {
    const designationRef = useRef<HTMLInputElement>(null);
    const deadlineRef = useRef<HTMLInputElement>(null);
    const durationRef = useRef<HTMLInputElement>(null);
    const startDateRef = useRef<HTMLInputElement>(null);
    const notesRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data = {
            designation: designationRef.current?.value,
            deadline: deadlineRef.current?.value,
            duration: durationRef.current?.value,
            startDate: startDateRef.current?.value,
            notes: notesRef.current?.value,
        };

        axios
            .post("http://localhost:3000/Tasks", data)
            .then((response) => {
                console.log("Data sent successfully to the database!");
            })
            .catch((error) => {
                console.error("Error sending data to the database: ", error);
            });
    };

    return (
        <>
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
                        type="text"
                        id="deadLine"
                        name="deadline"
                        ref={deadlineRef}
                    />
                    <br />

                    {/* <label htmlFor="duration">Duration</label>
                    <br />
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        placeholder="e.g. 2d 3h 30m"
                        ref={durationRef}
                    /> */}
                    <br />

                    {/* <label htmlFor="startDate">Start Date</label>
                    <br />
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        ref={startDateRef}
                    />
                    <br /> */}

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
        </>
    );
};

export default NewTask;
