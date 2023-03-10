
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface User {
    id_users?: string;
    firstname?: string;
    name?: string;
    mail?: string;
    password?: string;
}

const PatchUsers = () => {
    const [user, setUser] = useState<User>();
    const firstnameElement = useRef<HTMLInputElement>(null);
    const nameElement = useRef<HTMLInputElement>(null);
    const emailElement = useRef<HTMLInputElement>(null);
    const passwordElement = useRef<HTMLInputElement>(null);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/theyUsers/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        axios
            .patch(`http://localhost:3000/theyUsers/${user?.id_users}`, {
                name: nameElement.current?.value,
                mail: emailElement.current?.value,
                password: passwordElement.current?.value,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUser((prevUser) => ({
            ...(prevUser || {}),
            [name]: value,
            id_users: prevUser?.id_users,
        }));
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="firstname">Prénom :</label>
            <input
                type="text"
                name="firstname"
                id="firstname"
                value={user.firstname}
                onChange={handleInputChange}
                ref={firstnameElement}
            />

            <label htmlFor="name">Nom :</label>
            <input
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={handleInputChange}
                ref={nameElement}
            />

            <label htmlFor="email">Adresse e-mail :</label>
            <input
                type="email"
                name="mail"
                id="email"
                value={user.mail}
                onChange={handleInputChange}
                ref={emailElement}
            />

            <label htmlFor="password">Mot de passe :</label>
            <input
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
                ref={passwordElement}
            />

            <button type="submit">Enregistrer les modifications</button>
        </form>
    );
};

export default PatchUsers;
