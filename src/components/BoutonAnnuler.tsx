import { NavLink } from "react-router-dom";
//import "./BoutonAnnuler.css";
const BoutonAnnuler = () => {
    return (
        <button type="button" className="btn btn-Annuler">
            <NavLink to="/" end className="nav-link">
                Annuler
            </NavLink>
        </button>
    );
};

export default BoutonAnnuler;