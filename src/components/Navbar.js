import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
// import logo from '../images/chimp-tech-sm.png';

const Navbar = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        {/* Navbar code... */}
            <div className="container">
                {/* <a className="navbar-brand" href="/">
                <img src={logo} alt="Your Logo" />
                </a> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            > Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            > Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            > Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            > Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        
            {/* Back to Top button */}
            {showBackToTop && (
                <button className="back-to-top" onClick={scrollToTop}>
                    Back to Top
                </button>
            )}
        </nav>
    );
};

export default Navbar;