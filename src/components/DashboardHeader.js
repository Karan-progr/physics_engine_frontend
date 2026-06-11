import "./DashboardHeader.css"
import { Link } from "react-router-dom";

function DashboardHeader () {
    return (
        <header className="DashboardHeader">
            <h1>Welcome, KARAN</h1>
            <ul className="shineList">
                <li><Link to="/" className="links">Explore</Link></li>
                <li><Link to="/" className="links">Publish</Link></li>
                <li><Link to="/" className="links">Create</Link></li>
                <li><Link to="/" className="links">Logout</Link></li>
            </ul>
        </header>
    );
}

export default DashboardHeader;