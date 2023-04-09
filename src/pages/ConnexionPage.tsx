// import { useState } from "react";
// import axios from "axios";

// interface LoginFormProps {
//     onLoginSuccess: () => void;
// }

// interface LoginFormData {
//     name: string;
//     password: string;
// }

// const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
//     // console.log('user  connected');
//     const [formData, setFormData] = useState<LoginFormData>({
//         name: "",
//         password: "",
//     });

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [event.target.name]: event.target.value,
//         }));
//     };

//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();

//         try {
//             const response = await axios.post("http://localhost:8080/auth/login", formData);
//             if (response.status === 201 || 201) {
//                 console.log('user  connected');
//                 onLoginSuccess( );

//                 window.location.href = "/TaskLists";
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 name:
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                 />
//             </label>
//             <label>
//                 Password:
//                 <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                 />
//             </label>
//             <button type="submit">Valider</button>
//             <button type="button" onClick={() => setFormData({ name: "", password: "" })}>Annuler</button>
//         </form>
//     );
// };

// export default LoginForm;

import { useState } from "react";
import axios from "axios";
import { User } from "../App";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";



interface LoginFormProps {
    onLoginSuccess: () => void;
    setUser: (user: User | null) => void;
}

interface LoginFormData {
    name: string;
    password: string;
}

const LoginForm = ({ onLoginSuccess, setUser }: LoginFormProps) => {
    //const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginFormData>({
        name: "",
        password: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {

            const response = await axios.post("http://localhost:8080/auth/login", formData);
            console.log("API Response: ", response.data);
            if (response.status === 200 || 201) {
                //const navigate = useNavigate("/TaskLists");
                console.log('user  connected');
                onLoginSuccess();
                setUser(response.data.user);

            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Valider</button>
                <button type="button" onClick={() => setFormData({ name: "", password: "" })}>
                    Annuler
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
