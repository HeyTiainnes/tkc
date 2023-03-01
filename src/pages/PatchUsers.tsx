
// import { useRef, useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// interface User {
//     id_users?: string;
//     firstname?: string;
//     name?: string;
//     mail?: string;
//     password?: string;
// }
// //
// const PatchUsers = () => {
//     const [user, setUser] = useState<User>();
//     const firstnameElement = useRef<HTMLInputElement>(null);
//     const nameElement = useRef<HTMLInputElement>(null);
//     const emailElement = useRef<HTMLInputElement>(null);
//     const passwordElement = useRef<HTMLInputElement>(null);

//     const { id } = useParams<{ id: string }>(); // Récupération de l'ID de l'URL

//     useEffect(() => {
//         axios
//             .get(`http://localhost:3000/theyUsers/${id}`)
//             .then((response) => {
//                 setUser(response.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, [id]); // Utilisation de l'ID dans les dépendances de useEffect

//     const handleSubmitForm = (e: React.FormEvent) => {
//         e.preventDefault();

//         axios
//             .patch(`http://localhost:3000/theyUsers/${user?.id_users}`, {
//                 firstname: firstnameElement.current?.value,
//                 name: nameElement.current?.value,
//                 mail: emailElement.current?.value,
//                 password: passwordElement.current?.value,
//             })
//             .then((response) => {
//                 console.log(response);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setUser((prevUser) => ({
//             ...(prevUser || {}),
//             [name]: value,
//             id_users: prevUser?.id_users,
//         }));
//     };

//     if (!user) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <form onSubmit={handleSubmitForm}>
//             <div>
//                 <label htmlFor="firstname">Prénom :</label>
//                 <input
//                     type="text"
//                     name="firstname"
//                     id="firstname"
//                     value={user.firstname}
//                     onChange={handleInputChange}
//                     ref={firstnameElement}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="name">Nom :</label>
//                 <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     value={user.name}
//                     onChange={handleInputChange}
//                     ref={nameElement}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="email">Adresse e-mail :</label>
//                 <input
//                     type="email"
//                     name="mail"
//                     id="email"
//                     value={user.mail}
//                     onChange={handleInputChange}
//                     ref={emailElement}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password">Mot de passe :</label>
//                 <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     onChange={handleInputChange}
//                     ref={passwordElement}
//                 />
//             </div>
//             <button type="submit">Enregistrer les modifications</button>
//         </form>
//     );
// };

// export default PatchUsers;
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface User {
    id_users?: string;
    firstname?: string;
    name?: string;
    mail?: string;
    password?: string;
}

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
                firstname: firstnameElement.current?.value,
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

export default PatchUsers;
