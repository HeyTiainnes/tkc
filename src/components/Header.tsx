import React, { useContext } from "react";
import "./Header.css";
import { User } from "../App";
import UserContext from "../contexts/UserContext"; // Corrigez l'importation ici

const Header = () => {
    const user = useContext<User | null>(UserContext);
    console.log("User from context: ", user);
    return (
        <div className="bonjour">
            {user ? `Bonjour ${user.name}` : "Veuillez vous connecter"}
        </div>
    );
};

export default Header;

