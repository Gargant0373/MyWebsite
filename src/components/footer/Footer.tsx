import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2024 Gargant. All Rights Reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
