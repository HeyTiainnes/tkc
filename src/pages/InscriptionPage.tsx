
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useRef, FormEvent } from "react";
import './InscriptionPage.css';
import BoutonAnnuler from "../components/BoutonAnnuler";

const Inscription = () => {
    const nameElement = useRef<HTMLInputElement>(null);
    const emailElement = useRef<HTMLInputElement>(null);
    const passwordElement = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();

        console.log("button form clicked", handleSubmitForm);
        console.log(emailElement.current?.value);
        console.log(passwordElement.current?.value);

        axios
            .post('http://localhost:3000/auth/register', {
                name: nameElement.current?.value,
                mail: emailElement.current?.value,
                password: passwordElement.current?.value,
            })
            .then((response) => {
                console.log(response);
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="inscription-form">
            <label htmlFor="basic-url" className="form-label fw-bold">
                Pour vous inscrire: Entrez vos coordonnées.
            </label>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                    Name
                </span><br></br>
                <input
                    type="text"
                    className="form-control"
                    placeholder="DUPOND (Exemple)"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    ref={nameElement}
                />
            </div>

            <label htmlFor="basic-url" className="form-label">
                LOGIN
            </label><br></br>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                    Adresse E.m@il
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="philippe.dupond@cocorico.com (Exemple)"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    ref={emailElement}
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                    Mot de Passe
                </span>
                <input
                    type="password"
                    className="form-control"
                    placeholder="(Obligatoire)"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    ref={passwordElement}
                />
            </div>

            <div>
                <BoutonAnnuler />
                <button
                    type="button"
                    className="btn btn-green"
                    onClick={handleSubmitForm}
                >
                    Valider
                </button>
            </div>
        </div>
    );
};

export default Inscription;
