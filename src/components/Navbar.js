import { NavLink } from 'react-router-dom';
function Navbar()
{    
    function OpenMenu()
    {
        const navbar = document.querySelector('.navbar-ul');
        const menu = document.querySelector('.menu');
        navbar.classList.toggle("opened");
        menu.classList.toggle("activemenu");


    }
    return (
        <nav className="navbar">
            <ul className="navbar-ul">
                <li className="navbar-li">
                    <NavLink
                    onClick={OpenMenu}
                    exact  
                    to="/"
                    role="button"
                    tabIndex={0}
                    activeClassName="active"

                    >
                        Home
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink 
                    onClick={OpenMenu}
                    to="/about"
                    role="button"
                    tabIndex={0}
                    activeClassName="active"
                    >
                        About Me 
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink 
                    onClick={OpenMenu}
                    to="/projects"
                    role="button"
                    tabIndex={0}
                    activeClassName="active"
                    >
                        Projects
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink 
                    onClick={OpenMenu}
                    to="/contact"
                    role="button"
                    tabIndex={0}
                    activeClassName="active"

                    >
                        Contact
                    </NavLink>
                </li>

            </ul>
            <div className="menu" onClick={OpenMenu}>
                <div className="burger" id="burger1"></div>
                <div className="burger" id="burger2"></div>
                <div className="burger" id="burger3"></div>

            </div>
        </nav>
    );
}
export default Navbar