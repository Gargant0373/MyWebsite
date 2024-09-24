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
                <FaLinkedinIn className="social" href="www.linkedin.com/in/alex-despan" target="_blank" />
                <FaInstagram className="social" href="https://www.instagram.com/alexdespan/" target="_blank" />
                <FaGithub className="social" href="https://github.com/Gargant0373" target="_blank" />
            </div>
            <div className="divider" />
            <div className="last">
                just a friendly footer I made for you with <FaRegHeart className="icon" />
            </div>
        </footer>
    );
};

export default Footer;
