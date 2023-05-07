import { Link } from "react-router-dom";
import  logo from "../img/logo.png";

function Header() {
    return (
        <header>
            <div>
                <img className="logo" src={logo} alt="logo Kasa"/>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/a-propos">À propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;