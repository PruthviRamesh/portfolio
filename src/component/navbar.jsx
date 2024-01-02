import "../styles/navbar.css"
import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <div className="navbar">
            <h1>PORTFOLIO</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skill">Skills</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
     );
}
 
export default NavBar;