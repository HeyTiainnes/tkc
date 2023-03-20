// import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Home: React.FC = () => {
    const handleLogout = () => {
        localStorage.removeItem("token"); // Supprime le token du local storage
    };

    return (
        <div>
            <button onClick={handleLogout}>Déconnexion</button>
            {/* <Link to="/connexion">Se connecter</Link> */}
        </div>
    );
};

export default Home;
