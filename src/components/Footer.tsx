import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactMe from './ContactMe';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <p className="footer-cta">{t('footer.cta')}</p>
            <ContactMe />
            <p className="footer-rights">© {year} {t('footer.rights')}</p>
        </footer>
    );
};

export default Footer;
