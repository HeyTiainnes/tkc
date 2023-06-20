import { useRef, useState } from "react"; // Import des hooks useRef et useState depuis React
import axios from "axios"; // Import de la bibliothèque Axios pour effectuer des requêtes HTTP
import "./GetUsers.css"; // Import du fichier de styles CSS pour ce composant
import { Link } from "react-router-dom"; // Import du composant Link pour la navigation

interface User {
    id_users: string;
    name: string;
    mail: string;
}

const GetUsers = () => {
    const [listUsers, setListUsers] = useState<User[]>([]); // Déclaration d'un état local pour la liste des utilisateurs
    const BtnUsersList = useRef<HTMLButtonElement>(null); // Création d'une référence pour le bouton de récupération de la liste des utilisateurs

    const fetchUsers = () => { // Fonction pour récupérer la liste des utilisateurs depuis l'API
        axios
            .get<User[]>("http://localhost:3000/theyUsers") // Requête HTTP GET vers l'API pour récupérer la liste des utilisateurs
            .then((response) => { // Si la requête est réussie, mettre à jour l'état local de la liste des utilisateurs
                setListUsers(response.data);
            })
            .catch((error) => { // Si la requête échoue, afficher une erreur dans la console
                console.log("Erreur lors de la récupération de la liste des utilisateurs", error);
            });
    };

    const deleteUser = (id: string) => { // Fonction pour supprimer un utilisateur de la liste
        axios
            .delete(`http://localhost:3000/theyUsers/${id}`) // Requête HTTP DELETE vers l'API pour supprimer l'utilisateur correspondant
            .then(() => { // Si la requête est réussie, mettre à jour l'état local de la liste des utilisateurs
                setListUsers(listUsers.filter((user) => user.id_users !== id));
            })
            .catch((error) => { // Si la requête échoue, afficher une erreur dans la console
                console.log("Erreur lors de la suppression de l'utilisateur", error);
            });
    };

    const renderUsers = () => { // Fonction pour afficher la liste des utilisateurs
        if (listUsers.length === 0) { // Si la liste des utilisateurs est vide, afficher un message
            return <p>Aucun utilisateur à afficher pour le moment.</p>;
        }

        return ( // Sinon, afficher un tableau avec les utilisateurs
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers.map((user) => ( // Parcourir la liste des utilisateurs et afficher chaque utilisateur dans une ligne du tableau
                        <tr key={user.id_users}>
                            <td>{user.name}</td>
                            <td>{user.mail}</td>
                            <td>
                                <button onClick={() => window.location.href = `/PatchUsers/${user.id_users}`}>Modifier</button>
                                {/* Bouton pour modifier l'utilisateur */}
                                <button onClick={() => deleteUser(user.id_users)}>Supprimer</button>
                                {/* Bouton pour supprimer l'utilisateur */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div>
            <button ref={BtnUsersList} onClick={fetchUsers}>Récupérer la liste des utilisateurs</button>
            {/* Bouton pour récupérer la liste des utilisateurs */}
            {renderUsers()}
            {/* Appel à la fonction pour afficher la liste des utilisateurs */}
        </div>
    );
};
//
export default GetUsers;

