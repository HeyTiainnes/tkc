// import React, { useState } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface RouteParams {
    taskId: string;
    [key: string]: string | undefined;
}

const NewCheckList = () => {
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();
    const { taskId } = useParams<RouteParams>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const taskIdParsed = taskId ? parseInt(taskId, 10) : 0;
            const response = await axios.post("http://localhost:3000/checkListItems", {
                name,
                notes,
                tasksId: taskIdParsed, // Utilisation de "tasksId" au lieu de "taskId"
            });

            setName("");
            setNotes("");

            console.log(response.data);

            navigate(`/TaskLists`); // Redirection vers la page TaskLists
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom de la sous-tâche:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="notes">Notes (max. 1024 caractères):</label>
                <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />

                <button type="submit">Enregistrer</button>
                <button
                    type="button"
                    onClick={() => navigate(`/TaskLists`)} // Redirection vers la page TaskLists
                >
                    Annuler
                </button>
            </form>
        </div>
    );
};
export default NewCheckList
// export default NewCheckList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// interface RouteParams {
//     taskId: string;
//     checkListItemId?: string;
// }

// const NewCheckList = () => {
//     const [name, setName] = useState('');
//     const [notes, setNotes] = useState('');
//     const navigate = useNavigate();
//     const { taskId, checkListItemId } = useParams<RouteParams>();

//     useEffect(() => {
//         const fetchCheckListItem = async () => {
//             try {
//                 const response = await axios.get(
//                     `http://localhost:3000/checkListItems/${checkListItemId}`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                         },
//                     }
//                 );

//                 const checkListItemData = response.data;
//                 setName(checkListItemData.name);
//                 setNotes(checkListItemData.notes);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         if (checkListItemId) {
//             fetchCheckListItem();
//         }
//     }, [checkListItemId]);

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         try {
//             const taskIdParsed = parseInt(taskId, 10);
//             const data = {
//                 name,
//                 notes,
//                 tasksId: taskIdParsed,
//             };

//             if (checkListItemId) {
//                 await axios.put(
//                     `http://localhost:3000/checkListItems/${checkListItemId}`,
//                     data,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                         },
//                     }
//                 );
//             } else {
//                 await axios.post('http://localhost:3000/checkListItems', data, {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                     },
//                 });
//             }

//             navigate(`/TaskLists`);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Nom de la sous-tâche:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />

//                 <label htmlFor="notes">Notes (max. 1024 caractères):</label>
//                 <textarea
//                     id="notes"
//                     value={notes}
//                     onChange={(e) => setNotes(e.target.value)}
//                 />

//                 <button type="submit">Enregistrer</button>
//                 <button type="button" onClick={() => navigate('/TaskLists')}>
//                     Annuler
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default NewCheckList;
//  import { useState } from "react";
// import axios from "axios";
// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// interface RouteParams {
//     taskId: string;
//     [key: string]: string | undefined;
// }

// const NewCheckList = () => {
//     const [name, setName] = useState("");
//     const [notes, setNotes] = useState("");
//     const navigate = useNavigate();
//     const { taskId } = useParams<RouteParams>();

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         try {
//             const taskIdParsed = taskId ? parseInt(taskId, 10) : 0;
//             const response = await axios.post("http://localhost:3000/checkListItems", {
//                 name,
//                 notes,
//                 tasksId: taskIdParsed, // Utilisation de "tasksId" au lieu de "taskId"
//             });

//             setName("");
//             setNotes("");

//             console.log(response.data);

//             navigate(`/TaskLists`); // Redirection vers la page TaskLists
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Nom de la sous-tâche:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />

//                 <label htmlFor="notes">Notes (max. 1024 caractères):</label>
//                 <textarea
//                     id="notes"
//                     value={notes}
//                     onChange={(e) => setNotes(e.target.value)}
//                 />

//                 <button type="submit">Enregistrer</button>
//                 <button
//                     type="button"
//                     onClick={() => navigate(`/TaskLists`)} // Redirection vers la page TaskLists
//                 >
//                     Annuler
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default NewCheckList;