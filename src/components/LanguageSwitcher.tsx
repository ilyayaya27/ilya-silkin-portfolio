import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/switchers.css';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    return (
        <div className="switcher">
            <button
                className={i18n.language === 'ru' ? 'active' : ''}
                onClick={() => i18n.changeLanguage('ru')}
            >
                РУ
            </button>
            <button
                className={i18n.language === 'en' ? 'active' : ''}
                onClick={() => i18n.changeLanguage('en')}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;
