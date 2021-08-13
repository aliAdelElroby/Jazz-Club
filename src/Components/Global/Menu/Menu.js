import "./Menu.scss";
function Menu() {
    return (
        <div className="menu-mobile">
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
        </div>
    );
}
export default Menu;
