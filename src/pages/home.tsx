import React from "react"; // Importation de React
import { Link } from "react-router-dom"; // Importation du composant Link depuis react-router-dom
import Nav from "../components/Nav";

const Home: React.FC = () => { // Définition d'un composant fonctionnel nommé "Home"
    return (
        <div>
            <button>Inscription</button>
            <button>Connexion</button>
            {/* <Nav /> */}
            {/* <h1>Page d'accueil</h1> // Affichage d'un titre */}
            <Link to="/ConnexionPage">
                {/* // Utilisation du composant Link pour créer un lien vers la page "/connexion"  */}
                {/* <button>Start</button> */}
                {/* // Affichage d'un bouton avec le texte "Se connecter" dans le lien */}
            </Link>
        </div >
    );
};

export default Home; // Exportation du composant "Home" par défaut

