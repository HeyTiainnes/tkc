import React, { useState } from "react";
import axios from "axios";

const NewCheckList = () => {
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Envoyer les données à la base de données via Axios
            const response = await axios.post("http://localhost:3000/checkListItems", {
                name,
                notes,
            });

            // Réinitialiser les champs du formulaire après l'enregistrement réussi
            setName("");
            setNotes("");

            // Traiter la réponse ou effectuer d'autres actions nécessaires
            console.log(response.data);
        } catch (error) {
            // Gérer les erreurs de manière appropriée
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
            </form>
        </div>
    );
};

export default NewCheckList;
