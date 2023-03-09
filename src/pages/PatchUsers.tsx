// Importation des bibliothèques et composants nécessaires
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Interface définissant la structure de l'objet utilisateur
interface User {
    id_users?: string;
    firstname?: string;
    name?: string;
    mail?: string;
    password?: string;
}

// Définition des styles des différents éléments du formulaire
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0070f3;
  color: white;
  cursor: pointer;
`;
// Déclaration des états et références
const PatchUsers = () => {
    const [user, setUser] = useState<User>();
    const firstnameElement = useRef<HTMLInputElement>(null);
    const nameElement = useRef<HTMLInputElement>(null);
    const emailElement = useRef<HTMLInputElement>(null);
    const passwordElement = useRef<HTMLInputElement>(null);

    const { id } = useParams<{ id: string }>();
    // Utilisation du hook useEffect pour récupérer les données de l'utilisateur depuis l'API lors du premier rendu
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
    // Fonction appelée lors de la soumission du formulaire de modification de l'utilisateur
    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        // Envoi d'une requête de type PATCH à l'API pour mettre à jour les informations de l'utilisateur
        axios
            .patch(`http://localhost:3000/theyUsers/${user?.id_users}`, {
                //firstname: firstnameElement.current?.value,
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
    // Fonction appelée lors de la modification de l'un des champs du formulaire
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Mise à jour de l'état de l'utilisateur avec les nouvelles valeurs des champs modifiés
        setUser((prevUser) => ({
            ...(prevUser || {}),
            [name]: value,
            id_users: prevUser?.id_users,
        }));
    };
    // Condition vérifiant si les données de l'utilisateur ont bien été chargées depuis l'API. Si ce n'est pas le cas, une indication de chargement est affichée à l'écran.
    if (!user) {
        return <div>Loading...</div>;
    }
    // Affichage du formulaire de modification de l'utilisateur une fois que ses données ont été chargées depuis l'API.
    return (
        <Form onSubmit={handleSubmitForm}>
            <Label htmlFor="firstname">Prénom :</Label>
            <Input
                type="text"
                name="firstname"
                id="firstname"
                value={user.firstname}
                onChange={handleInputChange}
                ref={firstnameElement}
            />

            <Label htmlFor="name">Nom :</Label>
            <Input
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={handleInputChange}
                ref={nameElement}
            />

            <Label htmlFor="email">Adresse e-mail :</Label>
            <Input
                type="email"
                name="mail"
                id="email"
                value={user.mail}
                onChange={handleInputChange}
                ref={emailElement}
            />

            <Label htmlFor="password">Mot de passe :</Label>
            <Input
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
                ref={passwordElement}
            />

            <Button type="submit">Enregistrer les modifications</Button>
        </Form>
    );
};
// Exportation du composant PatchUsers pour être utilisé ailleurs dans l'application.
export default PatchUsers;

