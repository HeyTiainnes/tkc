// Import de la bibliothèque axios qui permet de réaliser des requêtes HTTP
import axios from "axios"
// Import du hook useNavigate pour la navigation
import { useNavigate } from "react-router-dom"
// Import du hook useRef pour récupérer les valeurs des champs de formulaire
import { useRef, FormEvent } from "react";
// Import d'un composant personnalisé BoutonAnnuler
import BoutonAnnuler from "../components/BoutonAnnuler";
// Déclaration du composant Inscription
const Inscription = () => {
    // Initialisation des références aux champs de formulaire
    const nameElement = useRef<HTMLInputElement>(null);
    const emailElement = useRef<HTMLInputElement>(null);
    const passwordElement = useRef<HTMLInputElement>(null);
    // Initialisation du hook useNavigate pour la navigation
    const navigate = useNavigate();
    // Définition de la fonction pour la soumission du formulaire
    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        // Affichage des valeurs des champs de formulaire
        console.log("button form clicked", handleSubmitForm);
        console.log(emailElement.current?.value);
        console.log(passwordElement.current?.value);
        // Requête HTTP POST pour l'inscription d'un utilisateur
        axios
            .post('http://localhost:3000/auth/register', {
                name: nameElement.current?.value,
                mail: emailElement.current?.value,
                password: passwordElement.current?.value,
            })
            .then((response) => {
                // Affichage de la réponse en cas de succès
                console.log(response);
                console.log(response.data);
            })
            .catch((err) => {
                // Affichage de l'erreur en cas d'échec
                console.log(err);
            });
    };
    // Rendu du composant Inscription
    return (
        <div>
            <label htmlFor="basic-url" className="form-label fw-bold">
                Pour vous inscrire: Entrez vos coordonnées.
            </label>

            {/* Champ de formulaire pour le nom */}
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

            {/* Champ de formulaire pour l'email */}
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

            {/* Champ de formulaire pour le mot de passe */}
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
                <BoutonAnnuler />{" "}
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
export default Inscription