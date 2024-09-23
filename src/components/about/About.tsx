import { useState, useEffect, useRef } from "react";
import "./About.css";

function About() {
    const [location, setLocation] = useState("estonia?");
    const [ocupation, setOcupation] = useState("student");
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [loadingDots, setLoadingDots] = useState("");
    const [startTyping, setStartTyping] = useState(false);

    const locations = ["estonia?", "romania?", "netherlands?", "all of them?"];
    const ocupations = ["student", "ta", "motorcyclist", "busy man"];

    const fullText = `
    as you've seen above, i am Alex.
    i am studying in the Netherlands at TU Delft.
    i enjoy riding motorcycles, sunshine and playing backgammon.
    `;

    useEffect(() => {
        const changeRandomly = () => {
            const changeLocation = Math.random() > 0.5;

            if (changeLocation) {
                setLocation(prev => locations[(locations.indexOf(prev) + 1) % locations.length]);
            } else {
                setOcupation(prev => ocupations[(ocupations.indexOf(prev) + 1) % ocupations.length]);
            }
        };

        const intervalId = setInterval(changeRandomly, 2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (!startTyping) return;

        let currentText = "";
        let index = 0;
        const delay = 50;

        const typewriterEffect = setInterval(() => {
            if (index < fullText.length) {
                currentText += fullText[index];
                if (fullText[index] === '\n') {
                    currentText += '<br />';
                }
                setText(currentText);
                index++;
            } else {
                setIsTyping(false);
                clearInterval(typewriterEffect);
            }
        }, delay);

        return () => clearInterval(typewriterEffect);
    }, [startTyping]);

    useEffect(() => {
        const dots = [".", "..", "..."];
        let index = 0;

        const loadingEffect = setInterval(() => {
            setLoadingDots(dots[index]);
            index = (index + 1) % dots.length;
        }, 1000);

        return () => clearInterval(loadingEffect);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartTyping(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    const textRef = useRef(null);

    return (
        <section id="about">
            <div className="title glow">about me?</div>
            <div className="object">
                <span className="keyword">const</span> data = <span className="paranthesis">[</span> <br />
                <span className="indent" />location: <span className="string">"{location}"</span><span className="paranthesis">,</span><br />
                <span className="indent" />ocupation: <span className="string">"{ocupation}"</span><span className="paranthesis">,</span><br />
                <span className="indent" />loading more<span className="loading">{loadingDots}</span><br />
                <span className="paranthesis">]</span>
            </div>
            <div className="text" ref={textRef}>
                <div dangerouslySetInnerHTML={{ __html: text }} />
                {!isTyping && <span className="cursor">|</span>}
            </div>
        </section>
    );
}

export default About;
