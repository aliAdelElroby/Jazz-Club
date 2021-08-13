import Button from "../Global/Button/Button";
import Navbar from "../Global/Navbar/Navbar";
import "./Layout.scss";

// Import Assets
import facebook_icn from "./assets/facebook_icn.svg";
import instagram_icn from "./assets/instagram_icn.svg";
import twitter_icn from "./assets/twitter_icn.svg";
import linkedin_icn from "./assets/linkedin_icn.svg";
import Menu from "../Global/Menu/Menu";
function Layout() {
    return (
        <div id="layout">
            <Navbar />
            <Menu />
            <div className="container main">
                <div className="row justify-content-end">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="content">
                            <span>24.12.2025</span>
                            <h2>
                                Jazz
                                <span>Concert</span>
                            </h2>
                            <Button val="BOOK NOW" />
                            <div className="info">
                                <div className="job">ARTIST</div>
                                <div className="name">
                                    John
                                    <br />
                                    <span>Harrison</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-end">
                    <div className="col-12">
                        <div className="footer">
                            <div className="copyright">
                                COPYRIGHT © JAZZ CLUB | CoddingWith
                                <span> AliElroby</span>
                            </div>
                            <div className="social-media">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/aliAdelElroby">
                                            <img
                                                src={facebook_icn}
                                                alt="facebook"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/aliadelelroby/">
                                            <img
                                                src={instagram_icn}
                                                alt="instagram"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/ali_adel_elroby">
                                            <img
                                                src={twitter_icn}
                                                alt="twitter"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/ali-adel-elroby-279225218/">
                                            <img
                                                src={linkedin_icn}
                                                alt="linkedIn"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Layout;
