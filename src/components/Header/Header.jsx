import {NavLink} from "react-router-dom";
import { AuthService } from "../../services/auth";
import classes  from './Header.module.css';

const Header = () => {

    const service = new AuthService();

    return (
        <nav>
            <ul className={classes['nav-links']}>
                <li>
                    <NavLink  to="/home" className={classes.link}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className={classes.link}>
                        Films
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add-movie" className={classes.link}>
                        Ajouter
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={classes.link}>
                        Connexion
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register" className={classes.link}>
                        Inscription
                    </NavLink>
                </li>
                <li>
                    <NavLink className={classes.link} onClick={service.logout}>
                        Déconnexion
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;