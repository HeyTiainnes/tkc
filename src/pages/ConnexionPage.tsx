import { useState } from "react";
import axios from "axios";

interface LoginFormProps {
    onLoginSuccess: () => void;
}

interface LoginFormData {
    username: string;
    password: string;
}

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
    const [formData, setFormData] = useState<LoginFormData>({
        username: "",
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
            const response = await axios.post("/api/login", formData);
            if (response.status === 200) {
                onLoginSuccess();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
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
            <button type="button" onClick={() => setFormData({ username: "", password: "" })}>Annuler</button>
        </form>
    );
};

export default LoginForm;
