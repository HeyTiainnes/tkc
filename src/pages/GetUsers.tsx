
import { useRef, useState } from "react";
import axios from "axios";
import "./GetUsers.css";
const GetUsers = () => {
    const [listUsers, setListUsers] = useState<any[]>([]);
    const BtnUsersList = useRef<HTMLButtonElement>(null);

    const BtnHandlerClick = () => {
        axios
            .get("http://localhost:3000/theyUsers")
            .then((response) => {
                setListUsers(response.data);
            })
            .catch((error) => {
                console.log("Erreur lors de la récupération de la liste des utilisateurs", error);
            });
    };
    //
    const deleteUser = (id: string) => {
        axios
            .delete(`http://localhost:3000/theyUsers/${id}`)
            .then(() => {
                setListUsers(listUsers.filter((user) => user.id_users !== id));
            })
            .catch((error) => {
                console.log("Erreur lors de la suppression de l'utilisateur", error);
            });
    };

    const editUser = (id: string) => {
        window.location.href = `/PatchUsers/${id}`;
    };

    return (
        <div>
            <button ref={BtnUsersList} onClick={BtnHandlerClick}>
                Récupérer la liste des utilisateurs
            </button>
            {listUsers.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers.map((user: any) => (
                            <tr key={user.id_users}>
                                <td>{user.name}</td>
                                <td>{user.mail}</td>
                                <td>
                                    <button onClick={() => editUser(user.id_users)}>Modifier</button>
                                    <button onClick={() => deleteUser(user.id_users)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Aucun utilisateur à afficher pour le moment.</p>
            )}
        </div>
    );
};

export default GetUsers;
