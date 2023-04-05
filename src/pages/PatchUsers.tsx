import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface User {
    id_users: string;
    name: string;
    email: string;
}

const PatchUsers = () => {
    const { id } = useParams<{ id: string }>(); // Récupération de l'ID de l'utilisateur à modifier depuis l'URL
    const [user, setUser] = useState<User>({ id_users: id ?? '', name: '', email: '' }); // Déclaration d'un état local pour l'utilisateur à modifier



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value }); // Mettre à jour l'état local de l'utilisateur avec les nouvelles valeurs du formulaire
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Empêcher la soumission du formulaire par défaut
        axios
            .patch(`http://localhost:8080/theyUsers/${id}`, { name: user.name, email: user.email }) // Envoyer une requête PATCH vers l'API pour mettre à jour l'utilisateur correspondant
            .then(() => {
                console.log('Utilisateur modifié avec succès');
            })
            .catch((error) => {
                console.log('Erreur lors de la modification de lutilisateur', error);
            });
    };

    useEffect(() => {
        axios
            .get<User>(`http://localhost:8080/theyUsers/${id}`)
            // Récupérer les informations de l'utilisateur correspondant depuis l'API
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log('Erreur lors de la récupération des informations de l utilisateur', error);
            });
    }, [id]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom:
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Modifier l'utilisateur</button>
            </form>
        </div>
    );

};

export default PatchUsers;