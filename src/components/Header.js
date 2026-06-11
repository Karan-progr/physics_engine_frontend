import { Link } from "react-router-dom";
import "./Header.css"

function Header () {
    return (
        <header className="primary-header">
            <h1>Phy2D</h1>
            <ul className="primary-navigation shineList">
                <li><Link to="/" className="links">Home</Link></li>
                <li><Link to="https://karan-progr.github.io/physics_engine/" className="links"><span>Try Now</span></Link></li>
                <li><Link to="/" className="links">About</Link></li>
                <li><a href="#mainFooter" className="links">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header;