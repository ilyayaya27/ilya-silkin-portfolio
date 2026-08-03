import React from 'react';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/main.css';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            {/* top-right toggles on desktop; fixed bottom app bar on mobile (contacts only visible there) */}
            <div className="switchers">
                <LanguageSwitcher />
                <ThemeSwitcher />
                <div className="bar-contacts">
                    <ContactMe />
                </div>
            </div>
            <About />
            <TechStack />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
