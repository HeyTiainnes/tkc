import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="#">Logo</a>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className={`menu ${showMenu ? "show" : ""}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
