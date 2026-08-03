import React, { useState, useEffect } from 'react';
import '../styles/switchers.css';

const ThemeSwitcher: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    const setTheme = (dark: boolean) => {
        const body = document.body;
        body.classList.remove(dark ? 'light' : 'dark');
        body.classList.add(dark ? 'dark' : 'light');
        setIsDark(dark);
    };

    useEffect(() => {
        setIsDark(document.body.classList.contains('dark'));
    }, []);

    return (
        <div className="switcher">
            <button
                className={!isDark ? 'active' : ''}
                onClick={() => setTheme(false)}
                aria-label="Light theme"
            >
                ☀️
            </button>
            <button
                className={isDark ? 'active' : ''}
                onClick={() => setTheme(true)}
                aria-label="Dark theme"
            >
                🌙
            </button>
        </div>
    );
};

export default ThemeSwitcher;
