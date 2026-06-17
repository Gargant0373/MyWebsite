import React, { useEffect, useRef, useMemo, useState } from 'react';
import './Career.css';
import { careerData } from '../../data/careerData';

interface Position { x: number; y: number; }

function generateNonOverlappingPositions(count: number): Position[] {
    const positions: Position[] = [];
    const X_MIN = 10;
    const X_MAX = 80;
    const Y_MIN = 20;
    const Y_MAX = 70;

    const baseMin = 11;
    const densityAdjust = Math.max(0.6, Math.min(1, 14 / count));
    let minDist = baseMin * densityAdjust;

    const MAX_ATTEMPTS_PER_POINT = 400;

    for (let i = 0; i < count; i++) {
        let attempts = 0;
        let placed = false;
        while (attempts < MAX_ATTEMPTS_PER_POINT && !placed) {
            attempts++;
            const x = Math.random() * (X_MAX - X_MIN) + X_MIN;
            const y = Math.random() * (Y_MAX - Y_MIN) + Y_MIN;
            const ok = positions.every(p => {
                const dx = p.x - x;
                const dy = p.y - y;
                const dist = Math.hypot(dx, dy);
                return dist >= minDist;
            });
            if (ok) {
                positions.push({ x, y });
                placed = true;
            }
            if (attempts === Math.floor(MAX_ATTEMPTS_PER_POINT * 0.6)) minDist *= 0.9;
            if (attempts === Math.floor(MAX_ATTEMPTS_PER_POINT * 0.8)) minDist *= 0.9;
        }
        if (!placed) {
            const ref = positions[Math.floor(Math.random() * Math.max(1, positions.length))] || { x: (X_MIN + X_MAX) / 2, y: (Y_MIN + Y_MAX) / 2 };
            positions.push({ x: Math.min(X_MAX, Math.max(X_MIN, ref.x + Math.random() * 4 - 2)), y: Math.min(Y_MAX, Math.max(Y_MIN, ref.y + Math.random() * 4 - 2)) });
        }
    }
    return positions;
}

const Career: React.FC = () => {
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // tailwind-ish sm breakpoint
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const adjustCardPosition = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            cardsRef.current.forEach(card => {
                if (card) {
                    const rect = card.getBoundingClientRect();

                    if (rect.bottom > windowHeight - 10) {
                        card.style.top = 'auto';
                        card.style.bottom = '80%';
                        card.style.transform = 'translateY(-10px)';
                    } else {
                        card.style.top = '80%';
                        card.style.bottom = 'auto';
                        card.style.transform = 'translateY(10px)';
                    }

                    if (rect.left < 10) {
                        card.style.left = '0';
                        card.style.right = 'auto';
                    } else if (rect.right > windowWidth - 10) {
                        card.style.left = 'auto';
                        card.style.right = '0';
                    } else {
                        card.style.left = '50%';
                        card.style.right = 'auto';
                    }
                }
            });
        };

        window.addEventListener('resize', adjustCardPosition);
        adjustCardPosition();

        return () => {
            window.removeEventListener('resize', adjustCardPosition);
        };
    }, []);

    const getAnimationDelay = (index: number) => `${index * 0.5}s`;

    const positions = useMemo(() => generateNonOverlappingPositions(careerData.length), []);

    return (
        <section id="career">
            <div className="title glow">experience</div>
            <div className="career-hint">hover the dots</div>
            {careerData.map((item, index) => {
                const { x, y } = positions[index];
                const delay = getAnimationDelay(index);
                return (
                    <div
                        className="career-wrapper"
                        key={index}
                        style={isMobile ? undefined : { top: `${y}%`, left: `${x}%` }}
                    >
                        <div
                            className="career-dot"
                            style={{
                                animationDelay: delay,
                            }}
                            aria-label={`${item.title} dot`}
                            role="button"
                        ></div>
                        <div
                            className="career-card"
                            ref={el => (cardsRef.current[index] = el)}
                        >
                            <h3>{item.title}</h3>
                            <p><strong>{item.organization}</strong> – {item.description}</p>
                            <span>{item.date}</span>
                        </div>
                    </div>
                );
            })}
        </section >
    );
};

export default Career;