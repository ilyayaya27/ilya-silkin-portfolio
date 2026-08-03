import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about">
            <h2>{t('about.name')}</h2>
            <p>
                <b>{t('about.description')}</b>
            </p>
        </section>
    );
};

export default About;
