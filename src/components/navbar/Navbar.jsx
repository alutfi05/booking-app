import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <span className="logo">Booking App</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
