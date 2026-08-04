import React from 'react';

const STACK = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Webpack', 'Docker', 'Git', 'Linux', 'AI'];
const ROT = [-2, 1, -1, 2, -2, 1, 2, -1, 1, -2];

const TechStack: React.FC = () => (
  <div className="tech-stack-container">
    {STACK.map((name, i) => (
      <span key={name} className="tech-tag" style={{ transform: `rotate(${ROT[i % ROT.length]}deg)` }}>
        {name}
      </span>
    ))}
  </div>
);

export default TechStack;
