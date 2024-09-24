import React, { useEffect, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

interface ProjectItem {
    title: string;
    description: string;
}

const projects: ProjectItem[] = [
    {
        title: "Flash Me",
        description: "A local flashcard application built in Python. Manage and study your own custom flashcards efficiently.",
    },
    {
        title: "LaDespani Website",
        description: "A website for a guesthouse in my hometown, created using React. Clean design and easy-to-use interface.",
    },
    {
        title: "Bear Hub",
        description: "A beer consumption tracking application, written in React + Express. Log and monitor your beer habits over time.",
    },
    {
        title: "Instagram Scheduler",
        description: "A scheduler for Instagram posts written in Python. Plan your posts and keep your feed organized.",
    },
    {
        title: "LowGear Website",
        description: "Website developed for LowGearSpecial Event, featuring event details and registration.",
    },
    {
        title: "Spigot Plugins",
        description: "A series of Minecraft plugins written in Java using the Spigot API. Extend Minecraft server functionality with custom features.",
    },
    {
        title: "More stuff...",
        description: "I've built many other projects that aren't relevant enough to display here.",
    },
    {
        title: "Future stuff...",
        description: "There's more to come! I'll be working on many more exciting projects—check out my GitHub for updates.",
    },
];

const getRandomOffset = (index: number) => {
    const offset = Math.floor(Math.random() * 200) + 100;
    return index % 2 === 0 ? offset : -offset;
};

const Projects: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [offsets, setOffsets] = useState<number[]>([]);
    useEffect(() => {
        setOffsets(projects.map((_, index) => getRandomOffset(index)));
    }, []);

    return (
        <ParallaxProvider>
            <section id="projects" className="projects">
                <div className="container">
                    <Parallax speed={3}>
                        <h2 className="title glow centered">my projects</h2>
                    </Parallax>
                    <div className="list">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                                selectedIndex={selectedIndex}
                                offset={offsets[index]}
                                onSelect={() => setSelectedIndex(selectedIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </ParallaxProvider>
    );
};

const ProjectCard: React.FC<{ project: ProjectItem; index: number; selectedIndex: number | null; offset: number; onSelect: () => void }> = ({ project, index, selectedIndex, offset, onSelect }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        setOpacity(selectedIndex === index ? 1 : selectedIndex == null ? 1 : 0);
    }, [selectedIndex]);

    return (
        <Parallax speed={(index + 1) * 4}>
            <div
                ref={ref}
                className={`project-card ${inView ? 'visible' : 'hidden'} ${selectedIndex === index ? 'selected' : ''}`}
                style={{
                    transform: `translateX(${offset}px)`,
                    opacity: `${opacity}`,
                }}
                onClick={onSelect}
            >
                <h3 className="project-title">{project.title}</h3>
                {selectedIndex === index && <p className="project-description">{project.description}</p>}
            </div>
        </Parallax>
    );
};

export default Projects;
