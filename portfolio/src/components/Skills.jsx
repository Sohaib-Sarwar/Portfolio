import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { skillsList, certifications } from '../data/portfolio';
import './Skills.css';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const skillIconMap = {
  'JavaScript': `${DEVICON}/javascript/javascript-original.svg`,
  'TypeScript': `${DEVICON}/typescript/typescript-original.svg`,
  'React.js': `${DEVICON}/react/react-original.svg`,
  'Node.js': `${DEVICON}/nodejs/nodejs-original.svg`,
  'Express.js': `${DEVICON}/express/express-original.svg`,
  'Python': `${DEVICON}/python/python-original.svg`,
  'Flask': `${DEVICON}/flask/flask-original.svg`,
  'FastAPI': `${DEVICON}/fastapi/fastapi-original.svg`,
  'MongoDB': `${DEVICON}/mongodb/mongodb-original.svg`,
  'MySQL': `${DEVICON}/mysql/mysql-original.svg`,
  'Docker': `${DEVICON}/docker/docker-original.svg`,
  'Google Cloud': `${DEVICON}/googlecloud/googlecloud-original.svg`,
  'Git': `${DEVICON}/git/git-original.svg`,
  'GitHub': `${DEVICON}/github/github-original.svg`,
  'Vite': `${DEVICON}/vitejs/vitejs-original.svg`,
  'Material-UI': `${DEVICON}/materialui/materialui-original.svg`,
  'HTML5': `${DEVICON}/html5/html5-original.svg`,
  'CSS3': `${DEVICON}/css3/css3-original.svg`,
  'C/C++': `${DEVICON}/cplusplus/cplusplus-original.svg`,
  'GraphQL': `${DEVICON}/graphql/graphql-plain.svg`,
  'Linux': `${DEVICON}/linux/linux-original.svg`,
  'Nginx': `${DEVICON}/nginx/nginx-original.svg`,
  'Vercel': `${DEVICON}/vercel/vercel-original.svg`,
  'Chart.js': `${DEVICON}/javascript/javascript-original.svg`,
};

const invertIcons = ['Express.js', 'Flask', 'GitHub', 'Vercel'];

const ribbonWords = [
  'CAPTIVATING', 'USER-FRIENDLY', 'ADAPTIVE', 'FLUID',
  'FUTURE-PROOF', 'SEO-READY', 'SCALABLE', 'PERFORMANT',
  'RELIABLE', 'INNOVATIVE', 'RESPONSIVE', 'CLEAN-CODE',
];
const doubledRibbon = [...ribbonWords, ...ribbonWords];

/* Spinning flower SVG */
function SpinningFlower() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="skills__flower-wrap">
      <motion.svg
        style={{ rotate }}
        className="skills__flower-svg"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 200 200)`}>
            <path
              d="M200 60 C240 120, 280 160, 200 200 C120 160, 160 120, 200 60Z"
              fill={`rgba(${20 + i * 8}, ${20 + i * 8}, ${25 + i * 8}, 0.8)`}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.5"
            />
          </g>
        ))}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <g key={`inner-${i}`} transform={`rotate(${angle} 200 200)`}>
            <path
              d="M200 100 C220 140, 240 170, 200 200 C160 170, 180 140, 200 100Z"
              fill={`rgba(${40 + i * 4}, ${40 + i * 4}, ${50 + i * 4}, 0.7)`}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.3"
            />
          </g>
        ))}
        <circle cx="200" cy="200" r="30" fill="url(#centerGlow)" />
        <defs>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="rgba(60,60,70,0.8)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="skills" ref={ref}>
      {/* Hero with spinning SVG + center reveal */}
      <div className="skills__hero" ref={heroRef}>
        <motion.div
          className="skills__reveal-left"
          initial={{ x: 0 }}
          animate={heroInView ? { x: '-100%' } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        />
        <motion.div
          className="skills__reveal-right"
          initial={{ x: 0 }}
          animate={heroInView ? { x: '100%' } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        />
        <div className="skills__hero-content">
          <SpinningFlower />
          <motion.div
            className="skills__hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="skills__hero-title">
              The Magic <span className="skills__hero-accent">Behind</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Skills pills with icons */}
      <div className="container">
        <motion.div
          className="skills__pills"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {skillsList.map((skill, i) => (
            <motion.div
              key={skill}
              className="skills__pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.03, duration: 0.35 }}
              whileHover={{ scale: 1.06, borderColor: 'rgba(255,255,255,0.2)' }}
            >
              {skillIconMap[skill] && (
                <img
                  src={skillIconMap[skill]}
                  alt=""
                  className={`skills__pill-icon${invertIcons.includes(skill) ? ' skills__pill-icon--invert' : ''}`}
                  loading="lazy"
                />
              )}
              <span>{skill}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications - enhanced cards */}
        <motion.div
          className="skills__certs"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="skills__certs-header">
            <EmojiEventsIcon sx={{ fontSize: 22, color: '#ffd700' }} />
            <span className="skills__certs-label">CERTIFICATIONS</span>
          </div>
          <div className="skills__certs-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="skills__cert-card"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <div className="skills__cert-badge">
                  <VerifiedIcon sx={{ fontSize: 28, color: '#4285f4' }} />
                </div>
                <div className="skills__cert-info">
                  <span className="skills__cert-name">{cert}</span>
                  <span className="skills__cert-issuer">Google Cloud</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Red diagonal ribbon marquee */}
      <div className="skills__ribbon-section">
        <div className="skills__ribbon skills__ribbon--back">
          <div className="skills__ribbon-track">
            {doubledRibbon.map((word, i) => (
              <span key={`b-${i}`} className="skills__ribbon-word">
                {word}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#fff" />
                </svg>
              </span>
            ))}
          </div>
        </div>
        <div className="skills__ribbon skills__ribbon--front">
          <div className="skills__ribbon-track skills__ribbon-track--reverse">
            {doubledRibbon.map((word, i) => (
              <span key={`f-${i}`} className="skills__ribbon-word">
                {word}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#fff" />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
