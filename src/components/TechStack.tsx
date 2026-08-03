import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDocker, FaGitAlt, FaLinux, FaRobot } from 'react-icons/fa';
import { SiTypescript, SiWebpack } from 'react-icons/si';

interface Tech {
  icon: JSX.Element;
  name: string;
  color: string;
}

const TechStack: React.FC = () => {
  const stack: Tech[] = [
    { icon: <FaHtml5 />, name: 'HTML', color: '#E34F26' },
    { icon: <FaCss3Alt />, name: 'CSS', color: '#1572B6' },
    { icon: <FaJsSquare />, name: 'JavaScript (JS)', color: '#F7DF1E' },
    { icon: <SiTypescript />, name: 'TypeScript (TS)', color: '#3178C6' },
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiWebpack />, name: 'WebPack', color: '#8DD6F9' },
    { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
    { icon: <FaLinux />, name: 'Linux', color: '#FCC624' },
    { icon: <FaRobot />, name: 'AI', color: '#7C3AED' }
  ];

  return (
    <div className="tech-stack-container">
      {stack.map((tech, index) => (
        <div key={index} className="tech-item">
          <div className="tech-icon" style={{ color: tech.color }}>
            {tech.icon}
          </div>
          <span className="tech-name" style={{ color: tech.color }}>
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
