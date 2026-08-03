import React from 'react';
import { useTranslation } from 'react-i18next';

const projects = [
    {
        key: 'project1',
        link: 'https://github.com/ilyayaya27/lms-lenno',
        demo: 'https://lms-lenno-frontend.vercel.app',
        img: require('../fixtures/lms-lenno.png'),
        alt: 'lms-lenno',
    },
    {
        key: 'project2',
        link: 'https://github.com/ilyayaya27/apply-hub',
    },
    {
        key: 'project3',
        link: 'https://github.com/ilyayaya27/applyMate',
        img: require('../fixtures/applymate.png'),
        alt: 'applymate',
    },
    {
        key: 'project4',
        link: 'https://github.com/ilyayaya27/pluely',
    },
    {
        key: 'project5',
        link: 'https://github.com/ilyayaya27/callPal',
    },
    {
        key: 'project6',
        link: 'https://github.com/ilyayaya27/proofreading-script',
    },
];

const Projects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="projects">
            <h2>{t('projects.title')}</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className={`project-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
                        {project.img ? (
                            <div className="wrap-image">
                                <img src={project.img} alt={project.alt || 'Project Image'} className="project-img" />
                            </div>
                        ) : (
                            <div className="no-image"></div>
                        )}
                        <div className="project-info">
                            <h3>{t(`projects.${project.key}`)}</h3>
                            <p>{t(`projects.${project.key}Description`)}</p>
                            <div className="btns">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className='viewCode'>{t('button.viewCode')}</button>
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <button className='demo'>{t('button.demo')}</button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
