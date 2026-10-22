import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TranslateIcon from '@mui/icons-material/Translate';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExploreIcon from '@mui/icons-material/Explore';
import { hobbies, languages } from '../data/portfolio';
import './Extras.css';

const hobbyIcons = [
  <CodeIcon key="c" />,
  <EmojiEventsIcon key="e" />,
  <CloudQueueIcon key="cl" />,
  <GroupsIcon key="g" />,
  <MenuBookIcon key="m" />,
  <SportsCricketIcon key="s" />,
];

export default function Extras() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="extras" ref={ref}>
      {/* Center-split reveal hero */}
      <div className="extras__hero">
        <div className="extras__reveal-panel-left" />
        <div className="extras__reveal-panel-right" />
        <h2 className="extras__mega-title">EXTRAS</h2>
        <p className="extras__hero-sub">Beyond the code</p>
      </div>

      <div className="container">
        <motion.div
          className="extras__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">BEYOND THE CODE</span>
          <h2 className="extras__title">
            MORE ABOUT <span className="extras__accent">ME</span>
          </h2>
        </motion.div>

        <div className="extras__grid">
          {/* Hobbies card */}
          <motion.div
            className="extras__card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="extras__card-top">
              <SportsEsportsIcon sx={{ fontSize: 20, color: 'var(--accent)' }} />
              <h3 className="extras__card-title">Interests</h3>
            </div>
            <div className="extras__hobbies">
              {hobbies.map((hobby, i) => (
                <div key={i} className="extras__hobby">
                  <span className="extras__hobby-icon">{hobbyIcons[i]}</span>
                  <span>{hobby}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages card */}
          <motion.div
            className="extras__card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <div className="extras__card-top">
              <TranslateIcon sx={{ fontSize: 20, color: 'var(--accent)' }} />
              <h3 className="extras__card-title">Languages</h3>
            </div>
            <div className="extras__languages">
              {languages.map((lang) => (
                <div key={lang.name} className="extras__lang">
                  <span className="extras__lang-name">{lang.name}</span>
                  <span className="extras__lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Exploring card */}
          <motion.div
            className="extras__card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="extras__card-top">
              <ExploreIcon sx={{ fontSize: 20, color: 'var(--accent)' }} />
              <h3 className="extras__card-title">Currently Exploring</h3>
            </div>
            <div className="extras__exploring">
              <span className="extras__explore-tag">Blockchain & Web3</span>
              <span className="extras__explore-tag">Decentralized Apps</span>
              <span className="extras__explore-tag">AI/ML Integration</span>
              <span className="extras__explore-tag">System Design</span>
              <span className="extras__explore-tag">Cloud Architecture</span>
            </div>
            <p className="extras__explore-note">
              Open to remote, hybrid, and on-site opportunities in fintech, logistics, SaaS, and AI domains.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
