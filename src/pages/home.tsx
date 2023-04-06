// import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";

const Home: React.FC = () => {
    const handleLogout = () => {
        localStorage.removeItem("token"); // Supprime le token du local storage
    };

    return (
        <div>
            <Header />
            <button onClick={handleLogout}>Déconnexion</button>
            {/* <Link to="/connexion">Se connecter</Link> */}
        </div>
    );
};

export default Home;
