import { useState } from "react";
import axios, { AxiosResponse } from 'axios';

interface LoginFormProps {
    onLoginSuccess: () => void;
}

interface LoginFormData {
    mail: string;
    password: string;
}

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
    const [formData, setFormData] = useState<LoginFormData>({
        mail: "",
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
            const response = await axios

                .post("http://localhost:3000/auth/login", formData);
            const token = response.data.accessToken;
            if (token) {
                localStorage.setItem('accessToken', token);
                onLoginSuccess();


            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                mail:
                <input
                    type="mail"
                    name="mail"
                    value={formData.mail}
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
            <button type="button" onClick={() => setFormData({ mail: "", password: "" })}>Annuler</button>
        </form>
    );
};

export default LoginForm;
