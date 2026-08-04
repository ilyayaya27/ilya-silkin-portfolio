import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const TerminalPreview: React.FC<{ lines: string[] }> = ({ lines }) => (
    <div className="terminal-card">
        {lines.map((line, i) => (
            <div key={i} className={`terminal-line ${i === 0 ? 'prompt' : ''}`}>{line}</div>
        ))}
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

const total = projects.length;

const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const idx = ((index % total) + total) % total;
    const current = projects[idx];

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') setIndex((i) => i - 1);
            if (e.key === 'ArrowRight') setIndex((i) => i + 1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <section id="projects">
            <div className="projects-header">
                <h2>{t('projects.title')}</h2>
                <div className="projects-counter">{idx + 1} / {total}</div>
            </div>
            <div className="carousel">
                <button className="nav-btn" onClick={() => setIndex((i) => i - 1)} aria-label="Previous">←</button>
                <div className="project-card">
                    {current.img ? (
                        <img src={current.img} alt={current.alt || 'Project screenshot'} className="project-img" />
                    ) : (
                        <TerminalPreview lines={current.terminal || []} />
                    )}
                    <div className="project-info">
                        <h3>{t(`projects.${current.key}`)}</h3>
                        <p>{t(`projects.${current.key}Description`)}</p>
                        <div className="btns">
                            <a href={current.link} target="_blank" rel="noopener noreferrer" className="viewCode">
                                {t('button.viewCode')}
                            </a>
                            {current.demo && (
                                <a href={current.demo} target="_blank" rel="noopener noreferrer" className="demo">
                                    {t('button.demo')}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <button className="nav-btn" onClick={() => setIndex((i) => i + 1)} aria-label="Next">→</button>
            </div>
            <div className="dots">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === idx ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to project ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
