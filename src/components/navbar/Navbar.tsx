import React, { useState } from 'react';
import './Navbar.css';

export function scrollTo(id: string) {
    const element = document.getElementById(id);
    if (!element) return;
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop - 40,
    });
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    function whoopHelloText() {
        var container = document.getElementById("welcome-container");
        if (!container) {
            alert("Do not hire me if this happens.");
            return;
        }
        if (isOpen) {
            container.style.transform = "translateY(0px)";
            container.style.transition = "transform 0.4s ease";
        }
        else {
            container.style.transform = "translateY(100px)";
            container.style.transition = "transform 0.7s cubic-bezier(.47, 1.64, .41, .8)";
        }
    }

    function handleHamburger() {
        setIsOpen(!isOpen);
        whoopHelloText();
    }

    return (
        <div className="navbar">
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a onClick={() => scrollTo('about')}>About</a>
                <a onClick={() => scrollTo('career')}>Experience</a>
                <a onClick={() => scrollTo('projects')}>Projects</a>
            </div>
            <div
                className="navbar-toggle"
                onClick={handleHamburger}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default Navbar;
