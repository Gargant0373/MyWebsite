import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="socials">
                <a href="https://www.linkedin.com/in/alex-despan" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn className="social" /></a>
                <a href="https://www.instagram.com/alexdespan/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram className="social" /></a>
                <a href="https://github.com/Gargant0373" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub className="social" /></a>
            </div>
            <div className="divider" />
            <div className="last">
                just a friendly footer I made for you with <FaRegHeart className="icon" />
            </div>
        </footer>
    );
};

export default Footer;
