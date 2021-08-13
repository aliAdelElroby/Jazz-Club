import "./Navbar.scss";

// Import Assets
import logo from "./assets/Logo.png";

function Navbar() {
    let menuOpen = (e) => {
        let MenuIcn = document.querySelector(".menu-icn"),
            Menu = document.querySelector(".menu-mobile");

        MenuIcn.classList.toggle("open");
        Menu.classList.toggle("menu-open");
    };
    return (
        <div className="main-navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="#events">EVENTS</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#contact-us">CONTACT US</a>
                    </li>
                </ul>
            </div>
            <div className="menu-icn" onClick={menuOpen}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
export default Navbar;
