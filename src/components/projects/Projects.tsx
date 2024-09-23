import React from 'react';
import './Projects.css';

interface ProjectItem {
    title: string;
    description: string;
    link: string;
}

const projects: ProjectItem[] = [
    {
        title: "Project One",
        description: "This is a description of project one. It involves building a full-stack application using React and Node.js.",
        link: "https://github.com/yourusername/project-one",
    },
    {
        title: "Project Two",
        description: "This is a description of project two. It focuses on a machine learning model developed in Python.",
        link: "https://github.com/yourusername/project-two",
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
