

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <NavLink to="/" end className="nav-link">
                            <img
                                src="/src/logo.png"
                                alt="Logo"
                                width="80"
                                height="80"
                                className="LogoNavbar"
                            />
                        </NavLink>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" end className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/InscriptionPage" end className="nav-link">
                                    Inscription
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ConnexionPage" end className="nav-link">
                                    Connexion
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/GetUsers" end className="nav-link">
                                    Users
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/TaskLists" end className="nav-link">
                                    Liste des tâches
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/NewTask" end className="nav-link">
                                    Nouvelle tache
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
