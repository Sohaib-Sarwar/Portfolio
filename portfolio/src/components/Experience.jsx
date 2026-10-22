import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { experience, volunteering, careerHighlight } from '../data/portfolio';
import RichText from './RichText';
import './Experience.css';

const allEntries = [
  ...experience.map((e) => ({ ...e, isVol: false })),
  {
    role: volunteering.role,
    company: volunteering.organization,
    location: 'Islamabad',
    type: 'Volunteering',
    period: volunteering.period,
    highlights: volunteering.highlights,
    isVol: true,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Scroll-linked progress for the timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const rocketTop = useTransform(scrollYProgress, (v) => `calc(${v * 100}% - 16px)`);

  return (
    <section id="experience" className="experience" ref={ref} aria-labelledby="experience-title">
      <div className="container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="experience__label">THE EXPERIENCE</span>
          <h2 id="experience-title" className="experience__title">
            Experience That
            <br />
            Brings <span className="experience__accent">Ideas to Life</span>
          </h2>
          <p className="experience__highlight">
            <TrendingUpIcon sx={{ fontSize: 16 }} />
            <span><RichText text={careerHighlight} /></span>
          </p>
        </motion.div>
      </div>

      <div className="experience__timeline" ref={timelineRef}>
        {/* Vertical timeline track */}
        <div className="experience__track" aria-hidden="true">
          <div className="experience__track-line" />
          <motion.div
            className="experience__track-progress"
            style={{ height: progressHeight }}
          />
          <motion.div
            className="experience__track-icon"
            style={{ top: rocketTop }}
          >
            <RocketLaunchIcon sx={{ fontSize: 18 }} />
          </motion.div>
        </div>

        <ol className="experience__entries">
          {allEntries.map((entry) => (
            <motion.li
              key={`${entry.role}-${entry.period}`}
              className="experience__entry"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="experience__entry-left">
                <span className="experience__period">
                  {entry.period.toUpperCase()}
                </span>
                <h3
                  className={`experience__company${entry.isVol ? ' experience__company--vol' : ''}`}
                >
                  {entry.company}
                </h3>
                <div className="experience__meta">
                  {entry.location && (
                    <span className="experience__detail">
                      <LocationOnOutlinedIcon sx={{ fontSize: 15 }} />
                      {entry.location}
                    </span>
                  )}
                  <span className="experience__detail">
                    {entry.isVol ? (
                      <VolunteerActivismIcon sx={{ fontSize: 15 }} />
                    ) : (
                      <BusinessCenterOutlinedIcon sx={{ fontSize: 15 }} />
                    )}
                    {entry.type}
                  </span>
                </div>
              </div>

              <div className="experience__node" aria-hidden="true">
                <div className="experience__dot" />
              </div>

              <div className="experience__entry-right">
                <h4 className="experience__role">{entry.role}</h4>
                <ul className="experience__list">
                  {entry.highlights.map((h) => (
                    <li key={h} className="experience__text">
                      <RichText text={h} />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
