import { useState } from "react";
import axios from "axios";

interface LoginFormProps {
    onLoginSuccess: () => void;
}

interface LoginFormData {
    name: string;
    password: string;
}

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
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
            const response = await axios.post("http://localhost:3010/auth/login", formData);
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
                name:
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
            <button type="button" onClick={() => setFormData({ name: "", password: "" })}>Annuler</button>
        </form>
    );
};

export default LoginForm;
