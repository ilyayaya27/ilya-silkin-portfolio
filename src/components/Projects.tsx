import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const TerminalPreview: React.FC<{ lines: string[] }> = ({ lines }) => (
    <div className="terminal-card">
        <div className="terminal-dots">
            <span></span><span></span><span></span>
        </div>
        <div className="terminal-body">
            {lines.map((line, i) => (
                <div key={i} className={`terminal-line ${i === 0 ? 'prompt' : ''}`}>{line}</div>
            ))}
        </div>
    </div>
);

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
        // real script names from the repo: daily-hh.sh, linkedin-worker.sh, telegram-worker.sh
        terminal: [
            '$ ./daily-hh.sh',
            'hh.ru: 14 откликов отправлено',
            'linkedin-worker: синхронизация...',
            'telegram: авторизация ок',
        ],
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
        // verbatim commit message from the fork, commit 6e45d33
        terminal: [
            '$ git log -1 --oneline',
            '6e45d33 Add OpenRouter fallback',
            'chain, proxy-aware fetch, and',
            'window position fixes',
        ],
    },
    {
        key: 'project5',
        link: 'https://github.com/ilyayaya27/callPal',
        // real sample output from the project README
        terminal: [
            '$ npm start',
            'Email для ID id1: email1@example.ru',
            'Ссылка на сделку: amocrm.ru/leads/...',
            'Status: Требует QR-кода',
        ],
    },
    {
        key: 'project6',
        link: 'https://github.com/ilyayaya27/proofreading-script',
        // real flow from the project README
        terminal: [
            '$ make start',
            'Выберите класс: 9',
            'Обход расписания...',
            '→ grade9.csv сгенерирован',
        ],
    },
];

const Projects: React.FC = () => {
    const { t } = useTranslation();
    const listRef = useRef<HTMLDivElement>(null);

    const scrollByCard = (direction: 1 | -1) => {
        const list = listRef.current;
        if (!list) return;
        const card = list.querySelector('.project-card') as HTMLElement | null;
        const step = (card?.offsetWidth || 300) + 24;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        list.scrollBy({ left: step * direction, behavior: reduced ? 'auto' : 'smooth' });
    };

    return (
        <section id="projects">
            <div className="projects-header">
                <h2>{t('projects.title')}</h2>
                <div className="gallery-nav">
                    <button className="nav-btn" onClick={() => scrollByCard(-1)} aria-label="Previous">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button className="nav-btn" onClick={() => scrollByCard(1)} aria-label="Next">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="project-list" ref={listRef}>
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {project.img ? (
                            <img src={project.img} alt={project.alt || 'Project Image'} className="project-img" />
                        ) : (
                            <TerminalPreview lines={project.terminal || []} />
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
