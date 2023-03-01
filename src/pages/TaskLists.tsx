import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// définir le type des tâches
type Task = {
    id: number;
    title: string;
    description: string;
    done: boolean;
};

// initialiser les tâches
const initialTasks: Task[] = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description of Task 1',
        done: false,
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description of Task 2',
        done: true,
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description of Task 3',
        done: false,
    },
];

// définir le composant TaskLists
const TaskLists = () => {
    // utiliser le hook useState pour gérer les tâches dans un état local
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    // fonction pour basculer l'état "fait" / "à faire" d'une tâche
    const handleDone = (taskId: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, done: !task.done } : task
            )
        );
    };

    // fonction pour naviguer vers la page TaskDetail pour modifier une tâche
    const handleModify = (taskId: number) => {
        // trouver la tâche correspondante
        const task = tasks.find((task) => task.id === taskId);
        if (task) {
            // construire l'URL pour TaskDetail en incluant l'ID de la tâche en paramètre
            const url = `/task/${taskId}`;
            // naviguer vers TaskDetail en utilisant la méthode pushState de l'objet window.history
            window.history.pushState({ task }, '', url);
            // forcer la mise à jour de l'état du composant en utilisant setState et une valeur aléatoire
            setTasks([...tasks]);
        }
    };

    // rendre le composant TaskLists avec une table affichant les tâches
    return (
        <div>
            <h1>Task Lists</h1>
            <table>
                <thead>
                    <tr>

                        <th>Description</th>
                        <th>Done</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {/* boucle sur les tâches pour les afficher */}
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            {/* afficher le titre et la description de la tâche */}

                            <td>{task.description}</td>
                            {/* afficher le bouton Done pour basculer l'état "fait" / "à faire" */}
                            <td>
                                <button onClick={() => handleDone(task.id)}>
                                    {task.done ? 'Undone' : 'Done'}
                                </button>
                            </td>
                            {/* afficher le bouton Modify pour naviguer vers TaskDetail */}
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
