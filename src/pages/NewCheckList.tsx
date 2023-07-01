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
                taskId: taskIdParsed,
            });

            setName("");
            setNotes("");

            console.log(response.data);

            navigate(`/TaskDetails/${taskId}`);
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
                <button type="button" onClick={() => navigate(`/TaskDetails/${taskId}`)}>
                    Annuler
                </button>
            </form>
        </div>
    );
};

export default NewCheckList;
