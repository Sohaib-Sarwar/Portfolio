import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StarIcon from '@mui/icons-material/Star';
import { projects } from '../data/portfolio';
import './Projects.css';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const techIconMap = {
  'React.js': `${DEVICON}/react/react-original.svg`,
  'Node.js': `${DEVICON}/nodejs/nodejs-original.svg`,
  'Express.js': `${DEVICON}/express/express-original.svg`,
  'MongoDB': `${DEVICON}/mongodb/mongodb-original.svg`,
  'MySQL': `${DEVICON}/mysql/mysql-original.svg`,
  'Flask': `${DEVICON}/flask/flask-original.svg`,
  'SQLAlchemy': `${DEVICON}/sqlalchemy/sqlalchemy-original.svg`,
  'Python': `${DEVICON}/python/python-original.svg`,
};
const invertTechIcons = ['Express.js', 'Flask'];

export default function Projects() {
  const ref = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <section id="projects" className="projects" ref={ref}>
      {/* Giant title section with center reveal */}
      <div className="projects__hero" ref={heroRef}>
        <motion.div
          className="projects__reveal-left"
          initial={{ x: 0 }}
          animate={heroInView ? { x: '-100%' } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        />
        <motion.div
          className="projects__reveal-right"
          initial={{ x: 0 }}
          animate={heroInView ? { x: '100%' } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        />
        <motion.div
          className="projects__hero-inner"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="projects__mega-title">MY WORKS</h2>
          <div className="projects__hero-sub">
            <span className="projects__hero-label">
              CRAFTING DIGITAL EXPERIENCES
            </span>
            <span className="projects__hero-italic">
              with passion & code.
            </span>
          </div>
        </motion.div>
      </div>

      <div className="container">
        {/* Project cards - 2 column grid */}
        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="projects__card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
            >
              {/* Red accent dash */}
              <div className="projects__card-accent" />

              <div className="projects__card-header">
                <span className="projects__card-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-subtitle">{project.subtitle}</p>
              </div>

              <p className="projects__card-desc">{project.description}</p>

              {/* Features with star bullets */}
              <div className="projects__card-features">
                {project.features.map((f, j) => (
                  <div key={j} className="projects__card-feature">
                    <StarIcon sx={{ fontSize: 12 }} className="projects__star" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Tech pills with logos */}
              <div className="projects__card-tech">
                {project.tech.map((t, j) => (
                  <span key={j} className="projects__tech-pill">
                    {techIconMap[t] && (
                      <img
                        src={techIconMap[t]}
                        alt={t}
                        className="projects__tech-icon"
                        style={invertTechIcons.includes(t) ? { filter: 'invert(1) brightness(2)' } : {}}
                      />
                    )}
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="projects__card-actions">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-link"
                  >
                    <GitHubIcon sx={{ fontSize: 15 }} />
                    Source Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-link"
                  >
                    <ArrowOutwardIcon sx={{ fontSize: 15 }} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* See more */}
        <motion.div
          className="projects__more"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="https://github.com/Sohaib-Sarwar"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__more-link"
          >
            See more projects
            <ArrowOutwardIcon sx={{ fontSize: 16 }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
