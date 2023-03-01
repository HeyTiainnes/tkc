import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useRef, FormEvent } from "react";
import BoutonAnnuler from "../components/BoutonAnnuler";
// import BoutonValider from "../components/BoutonValider";


const Inscription = () => {
    const firstnameElement = useRef<HTMLInputElement>(null);
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
            .post('http://localhost:3000/theyUsers', {
                firstname: firstnameElement.current?.value,
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
        <div>
            <label htmlFor="basic-url" className="form-label fw-bold">
                Pour vous inscrire: Entrez vos coordonnées.
            </label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    Prénom
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Philippe (Exemple)"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    //  ref permet de mettre a jour mon champs
                    ref={firstnameElement}
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                    NOM
                </span>
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
            </label>
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
                    type="text"
                    className="form-control"
                    placeholder="(Obligatoire)"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    ref={passwordElement}
                />
            </div>
            <div>
                <BoutonAnnuler />{" "}
                <button
                    type="button"
                    className="btn btn-green"
                    onClick={handleSubmitForm}
                >
                    Valider
                    {/* < BoutonValider />{" "} */}
                </button>
            </div>
        </div>
    );
};
export default Inscription