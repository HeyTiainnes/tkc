import { useRef, useState } from "react";
import axios from "axios";

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
        window.location.href = `/editUser/${id}`;
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


// import { useRef, useState } from "react";
// import axios from "axios";
// import { UsersList } from "./UsersList";

// const GetUsers = () => {
//   const [listUsers, setListUsers] = useState<UsersList[]>([]);
//   const BtnUsersList = useRef<HTMLButtonElement>(null);

//   const BtnHandlerClick = () => {
//     axios
//       .get("http://localhost:3000/theyUsers")
//       .then((response) => {
//         setListUsers(response.data);
//       })
//       .catch((error) => {
//         console.log("Erreur lors de la récupération de la liste des utilisateurs", error);
//       });
//   };

//   const deleteUser = (id: string) => {
//     axios
//       .delete(`http://localhost:3000/theyUsers/${id}`)
//       .then(() => {
//         setListUsers(listUsers.filter((user) => user.id_users !== id));
//       })
//       .catch((error) => {
//         console.log("Erreur lors de la suppression de l'utilisateur", error);
//       });
//   };

//   const editUser = (id: string) => {
//     // Rediriger l'utilisateur vers la page de modification de l'utilisateur
//     window.location.href = `/editUser/${id}`;
//   };

//   return (
//     <div>
//       <button ref={BtnUsersList} onClick={BtnHandlerClick}>
//         Récupérer la liste des utilisateurs
//       </button>
//       {listUsers.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Nom</th>
//               <th>Email</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {listUsers.map((user) => (
//               <tr key={user.id_users}>
//                 <td>{user.name}</td>
//                 <td>{user.mail}</td>
//                 <td>
//                   <button onClick={() => editUser(user.id_users)}>Modifier</button>
//                   <button onClick={() => deleteUser(user.id_users)}>Supprimer</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Aucun utilisateur à afficher pour le moment.</p>
//       )}
//     </div>
//   );
// };

// export default GetUsers;
// //////////////new//////////////////////
// // import { useRef, useState } from "react";
// // import axios from "axios";

// // // Interface pour définir la forme d'un objet ou d'une classe
// // export interface UsersList {
// //     id_users: string;
// //     name: string;
// //     mail: string;
// //     password: string;
// // }

// // const GetUsers = () => {
// //     // Déclaration d'un state pour stocker la liste des utilisateurs
// //     const [listUsers, setListUsers] = useState<UsersList[]>([]);
// //     // Référence au bouton de récupération des utilisateurs
// //     const BtnUsersList = useRef<HTMLButtonElement>(null);

// //     // Fonction de gestion de l'événement de clic sur le bouton de récupération des utilisateurs
// //     const BtnHandlerClick = () => {
// //         // Requête pour récupérer la liste des utilisateurs depuis l'API
// //         axios
// //             .get("http://localhost:3000/theyUsers")
// //             .then((response) => {
// //                 // Mise à jour du state avec la liste des utilisateurs récupérée depuis l'API
// //                 setListUsers(response.data);
// //             })
// //             .catch((error) => {
// //                 // Gestion des erreurs en cas d'échec de la récupération de la liste des utilisateurs depuis l'API
// //                 console.log("Erreur lors de la récupération de la liste des utilisateurs", error);
// //             });
// //     };

// //     return (
// //         <div>
// //             {/* Bouton de récupération des utilisateurs */}
// //             <button ref={BtnUsersList} onClick={BtnHandlerClick}>
// //                 Récupérer la liste des utilisateurs
// //             </button>
// //             {/* Affichage de la liste des utilisateurs */}
// //             {listUsers.length > 0 ? (
// //                 listUsers.map((user) => (
// //                     <div key={user.id_users}>
// //                         <p>Nom: {user.name}</p>
// //                         <p>Email: {user.mail}</p>
// //                     </div>
// //                 ))
// //             ) : (
// //                 <p>Aucun utilisateur à afficher pour le moment.</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default GetUsers;
// ///////////////////////////////////////////////////////////////////////////////////////// LAST /////////////////////////////////////////////////////////////////////////////////////////////////////////


// // import { useNavigate } from "react-router-dom"
// // import { useRef, FormEvent, useState, useEffect } from "react";
// // import axios from "axios";

// // // Interface pour définir la forme d'un objet ou d'une classe
// // export interface UsersList {
// //     id_users: string;
// //     name: string;
// //     mail: string;
// //     password: string;
// // }

// // const UsersList = () => {
// //     // Déclaration d'un state pour stocker la liste des utilisateurs
// //     const [listUsers, setListUsers] = useState<UsersList[]>([]);

// //     // Utilisation du hook useEffect pour effectuer une action au chargement de la page
// //     useEffect(() => {
// //         // Requête pour récupérer la liste des utilisateurs depuis l'API
// //         axios.get("http://localhost:3000/theyUsers")
// //             .then((retourListDesUsers) => {
// //                 // Mise à jour du state avec la liste des utilisateurs récupérée depuis l'API
// //                 setListUsers(retourListDesUsers.data);
// //             })
// //             .catch((erreur) => {
// //                 // Gestion des erreurs en cas d'échec de la récupération de la liste des utilisateurs depuis l'API
// //                 console.log("Erreur lors de la récupération de la liste des utilisateurs", erreur);
// //             });
// //     }, []); // Le tableau vide en deuxième argument indique que cette requête ne doit être exécutée qu'une seule fois, au chargement de la page.

// //     return (
// //         <div>
// //             {/* Affichage de la liste des utilisateurs */}
// //             {listUsers.map((user) => (
// //                 <div key={user.id_users}>
// //                     <p>Nom: {user.name}</p>
// //                     <p>Email: {user.mail}</p>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default UsersList;

// // import { useNavigate } from "react-router-dom"
// // import { useRef, FormEvent, useState, useEffect } from "react";
// // import axios from "axios";
// // // interface pour definir la forme d'un objet ou d'une classe
// // export interface UsersList {
// //     id_users: string;
// //     name: string;
// //     mail: string;
// //     password: string;
// // }

// // const UsersList = () => {
// //     const [listUsers, setListUsers] = useState<UsersList[]>([]);

// // // recuperation de tous les users
// // useEffect(() => {
// //     //requette passée au back
// //     axios
// //     .get("http://localhost:3000/theyUsers")
    
// // })
// // .then((retourListDesUsers) => {


// // })


// //     return <div><p>UsersList</p></div>
// // }
// // export default UsersList;