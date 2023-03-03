import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export type Task = {
    id: number;
    designation: string;
    dead_line: string;
    notes: string;
    done: boolean;
};

const TaskLists = () => {
    // On utilise le Hook useState pour créer une variable d'état "tasks" initialisée à un tableau vide et une fonction "setTasks" pour la mettre à jour
    const [tasks, setTasks] = useState<Task[]>([]);

    // On utilise le Hook useEffect pour exécuter une requête GET au démarrage du composant et mettre à jour la variable d'état "tasks"
    useEffect(() => {
        axios.get('http://localhost:3000/Tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    // On crée une fonction "handleDone" qui supprime une tâche de la base de données et met à jour la variable d'état "tasks"
    const handleDone = (taskId: number) => {
        axios.delete(`http://localhost:3000/Tasks/${taskId}`)
            .then(response => {
                setTasks(prevTasks =>
                    prevTasks.filter(task => task.id !== taskId)
                );
                console.log(`Task ${taskId} deleted successfully from the database!`);
            })
            .catch(error => {
                console.error(`Error deleting task ${taskId} from the database:`, error);
            });
    };

    // On crée une fonction "handleModify" qui redirige vers la page de modification d'une tâche avec l'id de la tâche dans l'URL
    const handleModify = (taskId: number) => {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            window.location.href = `/newtask?id=${task.id}`;
        }
    };

    // On retourne l'interface utilisateur avec une table qui affiche les tâches
    return (
        <div>
            <h1>Task Lists</h1>
            <table>
                <thead>
                    <tr>
                        <th>Designation</th>
                        <th>Deadline</th>
                        <th>Notes</th>
                        <th>Done</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.designation}</td>
                            <td>{task.dead_line}</td>
                            <td>{task.notes}</td>
                            <td>
                                <button onClick={() => handleDone(task.id)}>
                                    {task.done ? 'Undone' : 'Done'}
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleModify(task.id)}>Modify</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskLists;
