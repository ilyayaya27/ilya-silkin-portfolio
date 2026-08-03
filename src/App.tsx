import React from 'react';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/main.css';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="switchers">
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
            <About />
            <TechStack />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
