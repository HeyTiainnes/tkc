import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface User {
    id_users: string;
    name: string;
    email: string;
}

const PatchUsers = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User>({ id_users: id ?? '', name: '', email: '' });



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios
            .patch(`http://localhost:3000/theyUsers/${id}`, { name: user.name, email: user.email })
            .then(() => {
                console.log('Utilisateur modifié avec succès');
            })
            .catch((error) => {
                console.log('Erreur lors de la modification de lutilisateur', error);
            });
    };

    useEffect(() => {
        axios
            .get<User>(`http://localhost:3000/theyUsers/${id}`)

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