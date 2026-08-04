import React from 'react';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import LanguageSwitcher from './components/LanguageSwitcher';
import './styles/main.css';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="grain" aria-hidden="true" />
            <div className="stripe-bar" aria-hidden="true" />
            <nav className="site-nav">
                <div className="brand">Ilya Silkin<span className="brand-accent">_</span></div>
                <LanguageSwitcher />
            </nav>
            <About />
            <TechStack />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
