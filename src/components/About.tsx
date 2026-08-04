import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about">
            <h1>{t('about.name')}</h1>
            <div className="eyebrow">{t('about.eyebrow')}</div>
        </section>
    );
};

export default About;
