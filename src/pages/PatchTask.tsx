
import React, { useState, useEffect, useRef } from 'react';
import { Task } from './TaskLists';
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';

type PatchTaskProps = {
    task: Task;
};

const PatchTask: React.FC<PatchTaskProps> = ({ task }) => {
    // Récupère l'ID de la tâche à partir des paramètres de la route
    const { id } = useParams<{ id: string }>();
    // Initialise l'état du composant avec la tâche actuelle
    const [currentTask, setCurrentTask] = useState<Task>(task);
    // Crée des références pour les champs de formulaire
    const designationRef = useRef<HTMLInputElement>(null);
    const deadlineRef = useRef<HTMLInputElement>(null);
    const notesRef = useRef<HTMLTextAreaElement>(null);

    // Effectue une requête HTTP GET pour récupérer la tâche correspondant à l'ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<Task, any> = await axios.get<Task>(
                    `http://localhost:3000/Tasks/${id}`
                );
                // Met à jour l'état avec les données de la réponse
                setCurrentTask(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    // Gère la soumission du formulaire de mise à jour de la tâche
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Récupère les valeurs des champs de formulaire via les références
        const data = {
            designation: designationRef.current?.value ?? '',
            dead_line: deadlineRef.current?.value ?? '',
            notes: notesRef.current?.value ?? '',
        };
        try {
            // Effectue une requête HTTP PATCH à l'API avec les données du formulaire pour mettre à jour la tâche correspondante
            await axios.patch(`http://localhost:3000/Tasks/${id}`, data);
            // Redirige l'utilisateur vers la page d'accueil après la mise à jour de la tâche
            window.location.href = '/';
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                {/* Champ de formulaire pour la désignation de la tâche */}
                <label htmlFor="designation">Designation</label>
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

                {/* Champ de formulaire pour la date limite de la tâche */}
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

                {/* Champ de formulaire pour les notes de la tâche */}
                <label htmlFor="notes">Notes (255 characters max)</label>
                <br />
                <textarea
                    id="notes"
                    name="notes"
                    maxLength={255}
                    ref={notesRef}
                    defaultValue={currentTask.notes}
                />
                {/* Boutons de formulaire pour la soumission ou l'annulation de la mise à jour de la tâche */}
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

