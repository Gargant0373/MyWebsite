import React, { useEffect, useRef } from 'react';
import './Career.css';

interface CareerItem {
    title: string;
    description: string;
    date: string;
}

const careerData: CareerItem[] = [
    {
        title: "spigot development",
        description: "my passion for coding started with Minecraft. me and my friend learned together how to write spigot minecraft plugins in java.",
        date: "2018"
    },
    {
        title: "summer camp counselor",
        description: "i spent 11 days along 4 other team members working with the 30 young adult participants towards making them see their own beauty and value.",
        date: "2021"
    },
    {
        title: "highschool",
        description: "i graduated high school in Brasov, Romania with 9.4 on the baccalaureate exam.",
        date: "2022"
    },
    {
        title: "teaching assistant",
        description: "i worked as a TA for the courses Computer Organization, Reasoning and Logic, and Object-Oriented Programming at TU Delft.",
        date: "2023"
    },
    {
        title: "research assistant",
        description: "i worked on a research paper to evaluate how well can large language models find the importance of values in song lyrics.",
        date: "2024"
    },
    {
        title: "web developer",
        description: "i have worked on many projects that involve web development.",
        date: "still going strong with this one"
    },
    {
        title: "university",
        description: "i am currently studying Computer Science and Engineering at TU Delft. i started studying in 2022 and so far I have developed many skills that I consider very useful for my career.",
        date: "2025"
    }
];

const getRandomPosition = () => {
    const x = Math.floor(Math.random() * 70 + 10);
    const y = Math.floor(Math.random() * 40 + 20);
    return { x, y };
};

const Career: React.FC = () => {
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const adjustCardPosition = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            cardsRef.current.forEach(card => {
                if (card) {
                    const rect = card.getBoundingClientRect();

                    // Vertical adjustment
                    if (rect.bottom > windowHeight - 10) {
                        card.style.top = 'auto';
                        card.style.bottom = '80%';
                        card.style.transform = 'translateY(-10px)';
                    } else {
                        card.style.top = '80%';
                        card.style.bottom = 'auto';
                        card.style.transform = 'translateY(10px)';
                    }

                    // Horizontal adjustment
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

    return (
        <section id="career">
            <div className="title glow">experience</div>
            <div className="subtle">CLICK THE DOTS</div>
            {careerData.map((item, index) => {
                const { x, y } = getRandomPosition();
                const delay = getAnimationDelay(index);
                return (
                    <div className="career-wrapper" key={index} style={{ top: `${y}%`, left: `${x}%` }}>
                        <div
                            className="career-dot"
                            style={{
                                animationDelay: delay,
                            }}
                        ></div>
                        <div
                            className="career-card"
                            ref={el => (cardsRef.current[index] = el)}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span>{item.date}</span>
                        </div>
                    </div>
                );
            })}
        </section >
    );
};

export default Career;