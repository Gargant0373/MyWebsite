import React, { useState, useEffect } from 'react';
import { scrollTo } from '../navbar/Navbar';
import './WelcomeMessage.css';

const WelcomeMessage: React.FC = () => {
    const [showHello, setShowHello] = useState(false);
    const [showName, setShowName] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const [colorInverted, setColorInverted] = useState(false);

    function invertColor() {
        var elements = document.getElementsByClassName("subtle");
        if (!elements) return;

        let style = (colorInverted ? "#cccccc5a" : "#6868685e");

        for (let i = 0; i < elements.length; i++) {
            (elements[i] as HTMLElement).style.color = style;
        }

        setColorInverted(!colorInverted);
    }

    useEffect(() => {
        const colorTimer = setTimeout(() => {
            invertColor();
        }, 5000)

        return () => {
            clearTimeout(colorTimer);
        }
    }, [colorInverted])

    useEffect(() => {
        const helloTimer = setTimeout(() => {
            setShowHello(true);
        }, 1000);

        const nameTimer = setTimeout(() => {
            setShowName(true);
        }, 1800);

        const scrollTimer = setTimeout(() => {
            setShowScroll(true);
        }, 7000);

        return () => {
            clearTimeout(helloTimer);
            clearTimeout(nameTimer);
            clearTimeout(scrollTimer);
        };
    }, []);

    return (
        <section id="welcome-container">
            <div className="main">
                <div className={`message text glow ${showHello ? 'visible' : ''}`}>hello.</div>
                <div className={`message text glow ${showName ? 'visible' : ''}`}>i'm Alex.</div>
            </div>
            <div className={`scroll-text message ${showScroll ? 'visible' : ''}`}><a className="subtle" onClick={() => scrollTo("about")} style={{
                cursor: "pointer",
            }}>SCROLL MORE</a></div>
            <div className="message glow scroll-more text">↓</div>
        </section>
    );
};

export default WelcomeMessage;
