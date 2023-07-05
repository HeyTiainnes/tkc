// // // import { useRef, useState, useEffect } from "react";
// // import axios from "axios";
// // import "./GetUsers.css";
// // import { Link } from "react-router-dom";
// // import { useState, useEffect } from "react";

// // interface User {
// //     id_users: string;
// //     name: string;
// //     mail: string;
// // }

// // const GetUsers = () => {
// //     const [listUsers, setListUsers] = useState<User[]>([]);
// //     const [isAdmin, setIsAdmin] = useState(false);
// //     const [userMail, setUserMail] = useState("");

// //     const fetchUsers = () => {
// //         axios
// //             .get<User[]>("http://localhost:3000/theyUsers")
// //             .then((response) => {
// //                 setListUsers(response.data);
// //             })
// //             .catch((error) => {
// //                 console.log("Erreur lors de la récupération de la liste des utilisateurs", error);
// //             });
// //     };

// //     const fetchUserRole = () => {
// //         axios
// //             .get<string>("http://localhost:3000/theyUsers/userRole")
// //             .then((response) => {
// //                 const role = response.data;
// //                 setIsAdmin(role === "admin@admin.admin");
// //             })
// //             .catch((error) => {
// //                 console.log("Erreur lors de la récupération du rôle de l'utilisateur", error);
// //             });
// //     };

// //     const updateUserMail = (newMail: string) => {
// //         axios
// //             .patch("http://localhost:3000/theyUsers/updateMail", { mail: newMail })
// //             .then(() => {
// //                 setUserMail(newMail);
// //             })
// //             .catch((error) => {
// //                 console.log("Erreur lors de la mise à jour du mail de l'utilisateur", error);
// //             });
// //     };

// //     const renderUsers = () => {
// //         if (listUsers.length === 0) {
// //             return <p>Aucun utilisateur à afficher pour le moment.</p>;
// //         }

// //         function deleteUser(id_users: string): void {
// //             throw new Error("Function not implemented.");
// //         }

// //         return (
// //             <table>
// //                 <thead>
// //                     <tr>
// //                         <th>Nom</th>
// //                         <th>Email</th>
// //                         <th>Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {listUsers.map((user) => (
// //                         <tr key={user.id_users}>
// //                             <td>{user.name}</td>
// //                             <td>{user.mail}</td>
// //                             <td>
// //                                 {isAdmin && (
// //                                     <>
// //                                         <button onClick={() => window.location.href = `/PatchUsers/${user.id_users}`}>Modifier</button>
// //                                         <button onClick={() => deleteUser(user.id_users)}>Supprimer</button>
// //                                     </>
// //                                 )}
// //                                 {!isAdmin && user.mail === userMail && (
// //                                     <button onClick={() => { updateUserMail(user.mail) }}>Modifier mon mail</button>
// //                                 )}


// //                                 {/* )} */}
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         );
// //     };

// //     useEffect(() => {
// //         fetchUsers();
// //         fetchUserRole();
// //     }, []);

// //     return (
// //         <div>
// //             <button onClick={fetchUsers}>Récupérer la liste des utilisateurs</button>
// //             {renderUsers()}
// //         </div>
// //     );
// // };

// // export default GetUsers;
// import axios from "axios";
// import "./GetUsers.css";
// import { useState, useEffect } from "react";

// interface User {
//     id_users: string;
//     name: string;
//     mail: string;
// }

// const GetUsers = () => {
//     const [listUsers, setListUsers] = useState<User[]>([]);
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [userMail, setUserMail] = useState("");

//     const fetchUsers = () => {
//         axios
//             .get<User[]>("http://localhost:3000/theyUsers")
//             .then((response) => {
//                 setListUsers(response.data);
//             })
//             .catch((error) => {
//                 console.log("Erreur lors de la récupération de la liste des utilisateurs", error);
//             });
//     };

//     const fetchUserRole = () => {
//         axios
//             .get<string>("http://localhost:3000/theyUsers/userRole")
//             .then((response) => {
//                 const role = response.data;
//                 setIsAdmin(role === "admin@admin.admin");
//             })
//             .catch((error) => {
//                 console.log("Erreur lors de la récupération du rôle de l'utilisateur", error);
//             });
//     };

//     const deleteUser = (id: string) => {
//         axios
//             .delete(`http://localhost:3000/theyUsers/${id}`)
//             .then(() => {
//                 setListUsers(listUsers.filter((user) => user.id_users !== id));
//             })
//             .catch((error) => {
//                 console.log("Erreur lors de la suppression de l'utilisateur", error);
//             });
//     };

//     const renderUsers = () => {
//         if (listUsers.length === 0) {
//             return <p>Aucun utilisateur à afficher pour le moment.</p>;
//         }

//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Nom</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {listUsers.map((user) => (
//                         <tr key={user.id_users}>
//                             <td>{user.name}</td>
//                             <td>{user.mail}</td>
//                             <td>
//                                 {isAdmin && (
//                                     <>
//                                         <button onClick={() => window.location.href = `/PatchUsers/${user.id_users}`}>Modifier</button>
//                                         <button onClick={() => deleteUser(user.id_users)}>Supprimer</button>
//                                     </>
//                                 )}
//                                 {!isAdmin && user.mail === userMail && (
//                   <button onClick={() => updateUserMail()}>Modifier mon mail</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//     useEffect(() => {
//         fetchUsers();
//         fetchUserRole();
//     }, []);

//     return (
//         <div>
//             <button onClick={fetchUsers}>Récupérer la liste des utilisateurs</button>
//             {renderUsers()}
//         </div>
//     );
// };

// export default GetUsers;
import axios from "axios";
import "./GetUsers.css";
import { useState, useEffect } from "react";

interface User {
    id_users: string;
    name: string;
    mail: string;
}

const GetUsers = () => {
    const [listUsers, setListUsers] = useState<User[]>([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userMail, setUserMail] = useState("");

    const fetchUsers = () => {
        axios
            .get<User[]>("http://localhost:3000/theyUsers")
            .then((response) => {
                setListUsers(response.data);
            })
            .catch((error) => {
                console.log("Erreur lors de la récupération de la liste des utilisateurs", error);
            });
    };

    const fetchUserRole = () => {
        axios
            .get<string>("http://localhost:3000/theyUsers/userRole")
            .then((response) => {
                const role = response.data;
                setIsAdmin(role === "admin@admin.admin");
            })
            .catch((error) => {
                console.log("Erreur lors de la récupération du rôle de l'utilisateur", error);
            });
    };

    const updateUserMail = (newMail: string) => {
        axios
            .patch("http://localhost:3000/theyUsers/updateMail", { mail: newMail })
            .then(() => {
                setUserMail(newMail);
            })
            .catch((error) => {
                console.log("Erreur lors de la mise à jour du mail de l'utilisateur", error);
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

    const renderUsers = () => {
        if (listUsers.length === 0) {
            return <p>Aucun utilisateur à afficher pour le moment.</p>;
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers.map((user) => (
                        <tr key={user.id_users}>
                            <td>{user.name}</td>
                            <td>{user.mail}</td>
                            <td>
                                {isAdmin && (
                                    <>
                                        <button onClick={() => window.location.href = `/PatchUsers/${user.id_users}`}>Modifier</button>
                                        <button onClick={() => deleteUser(user.id_users)}>Supprimer</button>
                                    </>
                                )}
                                {!isAdmin && user.mail === userMail && (
                                    <button onClick={() => updateUserMail(user.mail)}>Modifier mon mail</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    useEffect(() => {
        fetchUsers();
        fetchUserRole();
    }, []);

    return (
        <div>
            <button onClick={fetchUsers}>Récupérer la liste des utilisateurs</button>
            {renderUsers()}
        </div>
    );
};

export default GetUsers;
